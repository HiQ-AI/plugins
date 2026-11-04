import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdirSync, rmSync, lstatSync, existsSync, renameSync, cpSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { download, hash, validateBundle, encode } from './protocol.mjs';

export async function synchronize(root, registry, get = download) {
  const catalogPath = path.join(root, 'marketplace.json');
  let catalog = JSON.parse(readFileSync(catalogPath));
  const statePath = path.join(root, 'consumer-lock.json');
  const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath)) : {};
  const failures = [], changed = [], blocked = [];
  for (const registration of registry) {
    if (registration.blocked) { blocked.push(`${registration.source}: ${registration.blocked}`); continue; }
    try {
      const prefix = `/plugin-consumers/${registration.market}/${registration.channel}/`;
      const pointer = JSON.parse(await get(`https://download.hiq.earth${prefix}latest.json`, prefix));
      assert.equal(pointer.schemaVersion, 1);
      for (const key of ['market', 'channel', 'source']) assert.equal(pointer[key], registration[key], `Pointer ${key} mismatch`);
      assert.match(pointer.sha256, /^[a-f0-9]{64}$/);
      assert.match(pointer.revision, /^[a-f0-9]{40}$/);
      assert.match(pointer.sequence, /^\d{14}$/);
      assert.equal(pointer.url, `https://download.hiq.earth${prefix}revisions/${pointer.sequence}-${pointer.revision}/bundle.json`);
      const previous = state[registration.source];
      if (previous) {
        assert(pointer.sequence >= previous.sequence, 'Consumer rollback rejected');
        if (pointer.sequence === previous.sequence) assert.equal(pointer.sha256, previous.sha256, 'Immutable revision changed');
      }
      const bytes = await get(pointer.url, prefix);
      assert.equal(hash(bytes), pointer.sha256, 'Bundle digest mismatch');
      const bundle = validateBundle(JSON.parse(bytes), registration);
      assert.equal(bundle.revision, pointer.revision);
      assert.equal(bundle.sequence, pointer.sequence);
      if (previous?.sha256 === pointer.sha256) continue;
      for (const plugin of bundle.plugins) {
        const current = catalog.plugins.find(p => p.id === plugin.id);
        assert(current, 'New plugin requires explicit registration');
        const natural = value => value.split(/[^0-9]+/).filter(Boolean).map(Number);
        const compare = (a, b) => {
          const x = natural(a), y = natural(b);
          for (let i = 0; i < Math.max(x.length, y.length); i++) if ((x[i] ?? 0) !== (y[i] ?? 0)) return (x[i] ?? 0) - (y[i] ?? 0);
          return 0;
        };
        assert(compare(plugin.components.cli.version, current.components.cli.version) >= 0, 'CLI downgrade rejected');
        if (plugin.components.cli.version === current.components.cli.version) assert.deepEqual(plugin.components.cli, current.components.cli, 'Same CLI version changed pins');
      }
      // Validate every destination ancestor before staging any source files.
      for (const file of Object.keys(bundle.files)) {
        let target = root;
        for (const component of file.split('/')) {
          target = path.join(target, component);
          if (existsSync(target)) assert(!lstatSync(target).isSymbolicLink(), 'Linked consumer destination rejected');
        }
      }
      const stage = path.join(root, '.consumer-stage');
      rmSync(stage, { recursive: true, force: true });
      mkdirSync(stage);
      try {
        cpSync(path.join(root, 'plugins'), path.join(stage, 'plugins'), { recursive: true });
        mkdirSync(path.join(stage, 'scripts'));
        cpSync(path.join(root, 'scripts/catalog.mjs'), path.join(stage, 'scripts/catalog.mjs'));
        cpSync(path.join(root, 'README.md'), path.join(stage, 'README.md'));
        if (existsSync(path.join(root, 'cli-release.json'))) cpSync(path.join(root, 'cli-release.json'), path.join(stage, 'cli-release.json'));
        for (const plugin of bundle.plugins) rmSync(path.join(stage, plugin.path), { recursive: true });
        for (const [file, entry] of Object.entries(bundle.files)) {
          const destination = path.join(stage, file);
          mkdirSync(path.dirname(destination), { recursive: true });
          writeFileSync(destination, entry.content);
        }
        const nextCatalog = { ...catalog, plugins: catalog.plugins.map(plugin => bundle.plugins.find(p => p.id === plugin.id) ?? plugin) };
        writeFileSync(path.join(stage, 'marketplace.json'), encode(nextCatalog));
        const validate = spawnSync(process.execPath, ['scripts/catalog.mjs', '--write'], { cwd: stage, encoding: 'utf8' });
        assert.equal(validate.status, 0, validate.stderr);
        const verify = spawnSync(process.execPath, ['scripts/catalog.mjs'], { cwd: stage, encoding: 'utf8' });
        assert.equal(verify.status, 0, verify.stderr);
        for (const plugin of bundle.plugins) {
          const destination = path.join(root, plugin.path);
          rmSync(destination, { recursive: true });
          renameSync(path.join(stage, plugin.path), destination);
        }
        if (bundle.files['cli-release.json']) renameSync(path.join(stage, 'cli-release.json'), path.join(root, 'cli-release.json'));
      } finally { rmSync(stage, { recursive: true, force: true }); }
      catalog = { ...catalog, plugins: catalog.plugins.map(plugin => bundle.plugins.find(p => p.id === plugin.id) ?? plugin) };
      state[registration.source] = { sequence: pointer.sequence, revision: pointer.revision, sha256: pointer.sha256 };
      changed.push(registration.source);
    } catch (error) { failures.push(`${registration.source}: ${error.message}`); }
  }
  if (changed.length) {
    writeFileSync(catalogPath, encode(catalog));
    writeFileSync(statePath, encode(state));
    const result = spawnSync(process.execPath, ['scripts/catalog.mjs', '--write'], { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    const check = spawnSync(process.execPath, ['scripts/catalog.mjs'], { cwd: root, encoding: 'utf8' });
    assert.equal(check.status, 0, check.stderr);
  }
  return { changed, failures, blocked };
}
if (process.argv[1]?.endsWith('/sync.mjs')) {
  const root = process.cwd();
  const result = await synchronize(root, JSON.parse(readFileSync('consumer-sources.json')));
  console.log(JSON.stringify(result, null, 2));
  if (process.env.GITHUB_STEP_SUMMARY) writeFileSync(process.env.GITHUB_STEP_SUMMARY, `Consumer sync\n\nChanged: ${result.changed.join(', ') || 'none'}\n\n${result.failures.map(f => `- Failed: ${f}`).join('\n')}\n${result.blocked.map(f => `- Not connected: ${f}`).join('\n')}\n`, { flag: 'a' });
  // Partial source failures are visible, while independent valid updates may still get a PR.
  if (result.failures.length && !result.changed.length) process.exitCode = 1;
}
