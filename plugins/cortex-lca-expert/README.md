# openLCA modeling — prerelease

For LCA practitioners building a study from process records, inventory tables or an existing openLCA model.

## What it does

Clarify the study basis, prepare authorized native models, inspect references, calculate and interpret actual demand, factors and signed contributions.

## Install the plugin

In Claude Code:

```text
/plugin marketplace add HiQ-AI/plugins
```

```text
/plugin install cortex-lca-expert@hiq-plugins
```

This loads instructions and agent roles, not a CLI, credentials or business data. This repository marketplace is not an official-directory listing. Prepare the CLI separately using [installation and integrity checks](https://github.com/HiQ-AI/plugins/blob/main/docs/INSTALLATION.md).

## Native CLI and requirements

- Plugin version: **0.1.1**.
- CLI executable: `cortex-lca-expert`. Supply wrapper: **0.1.0**.
- Catalog platforms: `darwin-arm64, linux-x64, win32-x64`. Missing platforms are unsupported by this catalog.
- Exact archive URLs, SHA256 and executable/skill paths: [release catalog](https://github.com/HiQ-AI/plugins/blob/main/marketplace.json).

Requires your official openLCA installation, selected workspace/database, appropriate database licenses, CLI device login and lca-modeling-expert entitlement. Ordinary modeling does not require Pi or model login. Preserve the complete archive's Java and operating sidecars.

Start with the matching CLI's version and help. Do not guess commands or assume installation means readiness. Native Claude Code plugin installation does not interpret Cortex CLI provisioning fields. Codex marketplace adaptation has not been tested; production Desktop has not switched to this source. See [host compatibility](https://github.com/HiQ-AI/plugins/blob/main/docs/COMPATIBILITY.md).

## Limits and side effects

Executable **0.1.0-dev.14** is prerelease. Plugin 0.1.1 and supply wrapper 0.1.0 are not stable CLI releases. Do not restore/import/replace databases, start services, edit entities or calculate without authorization. Structural checks and calculations are not proof of ISO conformity.

Use only authorized input, preserve originals, keep credentials out of conversations and inspect actual receipts/readback. Do not blindly repeat an uncertain write. [Shared capability and permission boundaries](https://github.com/HiQ-AI/plugins/blob/main/docs/CAPABILITIES.md) apply.

## Example request

> Prepare a proposed study boundary and inventory from these authorized process records; list missing decisions before touching my database.

## Workbook tasks

Workbook inspection or editing may need a separate spreadsheet capability actually available and properly licensed in the host. This plugin does not bundle or automatically install one. Anthropic's [official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) and [its license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt) are references, not proof of installation or redistribution rights. If unavailable, explain the specific gap and request CSV/JSON only where adequate; do not imply it preserves all workbook features. See [spreadsheet dependencies](https://github.com/HiQ-AI/plugins/blob/main/docs/SPREADSHEETS.md).
