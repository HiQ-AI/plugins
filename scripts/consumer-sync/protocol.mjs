import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

export const origin = 'https://download.hiq.earth';
export const hash = bytes => createHash('sha256').update(bytes).digest('hex');
export const encode = value => Buffer.from(JSON.stringify(value, null, 2) + '\n');
export function allowedPath(file, ids) {
  if (typeof file !== 'string' || file.includes('\\') || file.split('/').some(part => !part || part === '.' || part === '..')) return false;
  if (file === 'cli-release.json') return ids.length === 20;
  return ids.some(id => file === `plugins/${id}/README.md` || file === `plugins/${id}/.claude-plugin/plugin.json` ||
    new RegExp(`^plugins/${id}/(?:skills/[a-z0-9-]+/(?:SKILL\\.md|references/[a-z0-9-]+\\.(?:md|json))|agents/[a-z0-9-]+\\.md|SOURCES\\.md)$`).test(file));
}
export function validateBundle(bundle, registration) {
  assert.equal(bundle.schemaVersion, 1);
  for (const key of ['market', 'channel', 'source']) assert.equal(bundle[key], registration[key], `Wrong ${key}`);
  assert.match(bundle.revision, /^[a-f0-9]{40}$/);
  assert.match(bundle.sequence, /^\d{14}$/);
  assert.deepEqual(bundle.plugins.map(p => p.id).sort(), [...registration.ids].sort());
  for (const plugin of bundle.plugins) {
    assert.equal(plugin.path, `plugins/${plugin.id}`);
    assert.equal(plugin.components.cli.name, plugin.id, 'Program identity mismatch');
    assert(Object.keys(plugin.components).every(key => ['cli', 'skills', 'agents'].includes(key)), 'Unknown executable component');
    const cli = plugin.components.cli;
    assert(Object.keys(cli).every(key => ['name', 'version', 'format', 'executable', 'skillPaths', 'releases'].includes(key)), 'Unknown CLI metadata');
    assert(['expert-release', undefined].includes(cli.format));
    for (const file of [cli.executable, ...Object.values(cli.skillPaths ?? {})]) assert(typeof file === 'string' && !file.startsWith('/') && !file.includes('\\') && !file.split('/').includes('..'), 'Unsafe archive entrypoint');
    if (registration.channel === 'incremental-prerelease') assert.match(plugin.components.cli.version, /^\d+\.\d+\.\d+-dev\./);
    else assert.match(plugin.components.cli.version, /^\d+\.\d+\.\d+$/);
    for (const component of [...(plugin.components.skills ?? []), ...(plugin.components.agents ?? [])]) assert.match(component.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.match(plugin.version, /^\d+\.\d+\.\d+(?:[-.][a-zA-Z0-9.-]+)?$/);
    for (const release of Object.values(plugin.components.cli.releases)) {
      const url = new URL(release.url);
      assert.equal(url.origin, origin);
      assert(!url.username && !url.password && !url.search && !url.hash, 'Unexpected archive URL credentials or suffix');
      assert(registration.archivePrefixes.some(prefix => url.pathname.startsWith(prefix)), 'Archive outside registered channel');
      assert(url.pathname.endsWith('.tar.gz'), 'Unsupported archive type');
      assert.match(release.sha256, /^[a-f0-9]{64}$/);
    }
  }
  assert(Object.keys(bundle.files).length > 0);
  for (const [file, entry] of Object.entries(bundle.files)) {
    assert(allowedPath(file, registration.ids), `Disallowed consumer path: ${file}`);
    assert.equal(typeof entry.content, 'string');
    assert.equal(hash(entry.content), entry.sha256, `File digest mismatch: ${file}`);
  }
  for (const plugin of bundle.plugins) {
    const manifest = JSON.parse(bundle.files[`${plugin.path}/.claude-plugin/plugin.json`].content);
    assert.equal(manifest.name, plugin.id);
    assert.equal(manifest.version, plugin.version);
    assert(Object.keys(manifest).every(key => ['name', 'displayName', 'version', 'description', 'author', 'repository', 'license', 'skills', 'agents'].includes(key)), 'Executable plugin configuration is not consumer content');
    if (manifest.skills !== undefined) assert.equal(manifest.skills, './skills/');
    if (manifest.agents !== undefined) assert.deepEqual(manifest.agents, (plugin.components.agents ?? []).map(agent => `./agents/${agent.id}.md`));
    for (const skill of plugin.components.skills ?? []) assert(bundle.files[`${plugin.path}/skills/${skill.id}/SKILL.md`]);
    for (const agent of plugin.components.agents ?? []) assert(bundle.files[`${plugin.path}/agents/${agent.id}.md`]);
  }
  return bundle;
}
export async function download(url, prefix) {
  assert(url.startsWith(`${origin}${prefix}`), 'URL outside registered feed');
  const response = await fetch(url, { redirect: 'error', cache: 'no-store' });
  assert(response.ok, `HTTP ${response.status}: ${url}`);
  return Buffer.from(await response.arrayBuffer());
}
