# Contributing

This repository publishes plugin instructions and pinned native CLI supply metadata. Keep changes within that scope; do not commit credentials, customer inputs, downloaded binaries or third-party Office/PDF skills.

## Update the catalog

The root `marketplace.json` is the authority for plugin IDs, plugin versions, component inventory, CLI supply versions, archive URLs and digests. `.claude-plugin/marketplace.json` is its generated native Claude Code projection. Do not maintain the same catalog twice.

1. Edit the relevant plugin, manifest and root catalog together. Distinguish plugin version, archive wrapper version and actual executable version; expert previews must not be relabeled as stable.
2. Check that every declared skill/agent exists and relative references work. Native plugin installations need a useful guide even when a compatible Cortex Host would replace it with a release-owned skill. Native plugin installation does not provision a CLI.
3. Update user documentation when behavior, prerequisites, platforms, permissions or download availability change. Link the official spreadsheet skill and its license rather than copying it.
4. Regenerate the native marketplace:

```bash
npm run generate
```

5. Run static consistency checks:

```bash
npm test
```

6. When changing native manifests, validate the marketplace and affected plugin folders with an available `claude plugin validate` CLI. The validator's manifest success is not proof that a CLI was installed, authenticated or exercised through a model-driven task.
7. For changed release pins, verify actual archive integrity, platform and reported executable version using an isolated environment and only authorized discovery commands. A wrapper filename is not version evidence. Keep binaries and private machine paths out of the PR.

Use a feature branch and PR. Describe changed consumers, actual verification, remaining prerequisites and release status. Do not trigger business calls, reviews, model charges, notifications, database operations or production changes as a catalog smoke test.

## CI boundary

GitHub-hosted CI runs static catalog checks only, with read-only repository permissions. Do not move business/API/database, native runtime, gateway, recovery or browser acceptance into a hosted, deployment or manually triggered workflow. Do not expose internal self-hosted runners to public pull requests.

Changes here do not automatically switch Desktop's production marketplace or release Desktop. That requires its own scoped change and verification.

## Reporting issues

Use [GitHub Issues](https://github.com/HiQ-AI/plugins/issues) with plugin ID, OS/architecture, actual CLI version, expected/observed behavior and a redacted error. Do not attach private materials, service tokens, login codes or full credential/environment dumps.
