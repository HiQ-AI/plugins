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
const expected = ['cortex-epd', 'cortex-lca-expert', 'cortex-org-wiki', 'hiq-editor', 'jimu-lca', 'querying-lca-datasets-expert'];
assert.deepEqual(catalog.plugins.map(p => p.id).sort(), expected);
assert.deepEqual(readdirSync(path.join(root, 'plugins')).sort(), expected);
const native = {
  name: 'hiq-plugins',
  owner: { name: 'HiQ' },
  metadata: { description: 'HiQ service plugins with native CLI operating guides.' },
  plugins: catalog.plugins.map(plugin => {
    assert.equal(plugin.type, 'plugin');
    assert.equal(plugin.path, `plugins/${plugin.id}`);
    const manifest = JSON.parse(read(`${plugin.path}/.claude-plugin/plugin.json`));
    assert.equal(manifest.name, plugin.id);
    assert.equal(manifest.version, plugin.version);
    read(`${plugin.path}/README.md`);
    for (const skill of plugin.components.skills ?? []) {
      checkComponent(plugin, `skills/${skill.id}/SKILL.md`);
    }
    for (const agent of plugin.components.agents ?? []) {
      checkComponent(plugin, `agents/${agent.id}.md`);
    }
    const cli = plugin.components.cli;
    assert.ok(cli.name && cli.version && cli.executable);
    assert.ok(Object.keys(cli.releases).length);
    for (const [platform, release] of Object.entries(cli.releases)) {
      assert.match(platform, /^(darwin|linux|win32)-(arm64|x64)$/);
      assert.equal(new URL(release.url).origin, 'https://download.hiq.earth');
      assert.match(release.sha256, /^[a-f0-9]{64}$/);
    }
    return {
      name: plugin.id,
      source: `./${plugin.path}`,
      description: manifest.description,
      version: plugin.version,
    };
  }),
};
const generated = `${JSON.stringify(native, null, 2)}\n`;
if (process.argv.includes('--write')) {
  mkdirSync(path.join(root, '.claude-plugin'), { recursive: true });
  writeFileSync(path.join(root, '.claude-plugin/marketplace.json'), generated);
} else {
  assert.equal(read('.claude-plugin/marketplace.json'), generated, 'Run npm run generate');
}
console.log(`Validated ${native.plugins.length} plugins, component paths, CLI pins and native index.`);
