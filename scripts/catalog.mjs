import assert from 'node:assert/strict';
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = name => readFileSync(path.join(root, name), 'utf8');
const checkComponent = (plugin, relative) => {
  const content = read(`${plugin.path}/${relative}`);
  assert.match(content, /^---\n[\s\S]*?\n---\n/, `Missing frontmatter: ${relative}`);
  assert.match(content, /^name: .+$/m, `Missing name: ${relative}`);
  assert.match(content, /^description: .+$/m, `Missing description: ${relative}`);
  for (const match of content.matchAll(/\$\{CLAUDE_PLUGIN_ROOT\}\/([^`\s]+)/g)) {
    read(`${plugin.path}/${match[1]}`);
  }
};
const catalog = JSON.parse(read('marketplace.json'));
const ids = catalog.plugins.map(plugin => plugin.id);
assert.ok(ids.length, 'The catalog must contain plugins');
assert.equal(new Set(ids).size, ids.length, 'Plugin IDs must be unique');
assert.deepEqual(readdirSync(path.join(root, 'plugins')).sort(), [...ids].sort());
const native = {
  name: 'hiq-plugins',
  owner: { name: 'HiQ' },
  metadata: { description: 'HiQ service plugins with native CLI operating guides.' },
  plugins: catalog.plugins.map(plugin => {
    assert.equal(plugin.type, 'plugin');
    assert.match(plugin.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(plugin.path, `plugins/${plugin.id}`);
    const manifest = JSON.parse(read(`${plugin.path}/.claude-plugin/plugin.json`));
    assert.equal(manifest.name, plugin.id);
    assert.equal(manifest.version, plugin.version);
    if (manifest.displayName !== undefined) assert.equal(manifest.displayName, plugin.name);
    read(`${plugin.path}/README.md`);
    for (const skill of plugin.components.skills ?? []) {
      checkComponent(plugin, `skills/${skill.id}/SKILL.md`);
    }
    for (const agent of plugin.components.agents ?? []) {
      checkComponent(plugin, `agents/${agent.id}.md`);
    }
    const cli = plugin.components.cli;
    assert.ok(cli.name && cli.version && cli.executable);
    assert.ok(cli.format === undefined || cli.format === 'expert-release', 'Unknown CLI archive format');
    assert.ok(Object.keys(cli.releases).length);
    for (const [platform, release] of Object.entries(cli.releases)) {
      assert.match(platform, /^(darwin|linux|win32)-(arm64|x64)$/);
      const url = new URL(release.url);
      assert.equal(url.origin, 'https://download.hiq.earth');
      const prefix = cli.format === 'expert-release' ? `/experts/${cli.name}/v${cli.version}/` : '/cli/';
      assert.ok(url.pathname.startsWith(prefix) && url.pathname.endsWith('.tar.gz'));
      assert.match(release.sha256, /^[a-f0-9]{64}$/);
    }
    return {
      name: plugin.id,
      ...(manifest.displayName ? { displayName: manifest.displayName } : {}),
      source: `./${plugin.path}`,
      description: manifest.description,
      version: plugin.version,
    };
  }),
};
const generated = `${JSON.stringify(native, null, 2)}\n`;
const marker = /<!-- catalog:start -->[\s\S]*?<!-- catalog:end -->/;
const readme = read('README.md');
assert.match(readme, marker, 'README catalog markers are required');
const escapeCell = value => value.replaceAll('|', '\\|').replaceAll('\n', ' ');
const overview = [
  '<!-- catalog:start -->',
  '| Plugin | Description |',
  '| --- | --- |',
  ...native.plugins.map(plugin => `| [${escapeCell(plugin.displayName ?? plugin.name)}](plugins/${plugin.name}/README.md) | ${escapeCell(plugin.description)} |`),
  '<!-- catalog:end -->',
].join('\n');
const generatedReadme = readme.replace(marker, () => overview);
if (process.argv.includes('--write')) {
  mkdirSync(path.join(root, '.claude-plugin'), { recursive: true });
  writeFileSync(path.join(root, '.claude-plugin/marketplace.json'), generated);
  writeFileSync(path.join(root, 'README.md'), generatedReadme);
} else {
  assert.equal(read('.claude-plugin/marketplace.json'), generated, 'Run npm run generate');
  assert.equal(readme, generatedReadme, 'Run npm run generate to update the README catalog');
}
console.log(`Validated ${native.plugins.length} plugins, component paths, CLI pins and native index.`);
