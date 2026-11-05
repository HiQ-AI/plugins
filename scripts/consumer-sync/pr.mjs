import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import assert from 'node:assert/strict';

const run = (command, args, allowFailure = false) => {
  const result = spawnSync(command, args, { encoding: 'utf8' });
  if (!allowFailure) assert.equal(result.status, 0, result.stderr || result.stdout);
  return result;
};
const branch = process.env.SYNC_BRANCH;
assert.match(branch, /^automation\/consumer-sync-[0-9]+$/);
run('git', ['config', 'user.name', 'github-actions[bot]']);
run('git', ['config', 'user.email', '41898282+github-actions[bot]@users.noreply.github.com']);
const status = run('git', ['status', '--porcelain']).stdout;
const ahead = run('git', ['rev-list', '--count', 'origin/main..HEAD']).stdout.trim();
if (!status.trim() && ahead === '0') { console.log('No consumer changes; no PR or dispatch.'); process.exit(0); }
const files = status.split('\n').filter(Boolean).map(line => line.slice(3));
assert(files.every(file => file.startsWith('plugins/') || ['marketplace.json', 'cli-release.json', 'consumer-lock.json', 'README.md', '.claude-plugin/marketplace.json'].includes(file)), 'Unexpected sync change');
run('git', ['checkout', '-B', branch]);
if (files.length) {
  run('git', ['add', '--', ...files]);
  run('git', ['commit', '-m', 'chore: synchronize published consumer packages']);
}
const head = run('git', ['rev-parse', 'HEAD']).stdout.trim();
run('git', ['push', 'origin', `HEAD:refs/heads/${branch}`]);
const repo = process.env.GITHUB_REPOSITORY;
const existing = JSON.parse(run('gh', ['pr', 'list', '--repo', repo, '--head', branch, '--state', 'open', '--json', 'number']).stdout);
const body = 'Generated from registered immutable CDN consumer packages. Review content and pins before merging. Automatic merge is disabled. Static validation is explicitly dispatched on this exact automation branch because GITHUB_TOKEN-created PR events do not trigger ordinary PR CI.\n\nHead: '+head;
if (existing.length) run('gh', ['pr', 'edit', String(existing[0].number), '--repo', repo, '--body', body]);
else run('gh', ['pr', 'create', '--repo', repo, '--head', branch, '--base', 'main', '--title', 'Synchronize published plugin consumer packages', '--body', body]);
assert.equal(run('git', ['ls-remote', 'origin', `refs/heads/${branch}`]).stdout.split(/\s/)[0], head, 'Head moved before validation dispatch');
run('gh', ['workflow', 'run', 'validate.yml', '--repo', repo, '--ref', branch, '-f', `expected_head=${head}`]);
console.log(`Dispatched existing validation for exact head ${head}; merge remains manual.`);
