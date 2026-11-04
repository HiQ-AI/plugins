# HiQ Editor — dataset authoring

For dataset authors and reviewers preparing UPR workbooks for HiQ Editor.

## What it does

Prepare authorized inputs, inspect preflight findings, import a workbook, trial-calculate and review the actual backend receipts.

## Install the plugin

In Claude Code:

```text
/plugin marketplace add HiQ-AI/plugins
```

```text
/plugin install hiq-editor@hiq-plugins
```

This loads instructions and agent roles, not a CLI, credentials or business data. This repository marketplace is not an official-directory listing. Prepare the CLI separately using [installation and integrity checks](https://github.com/HiQ-AI/plugins/blob/main/docs/INSTALLATION.md).

## Native CLI and requirements

- Plugin version: **0.12.0**.
- CLI executable: `hiq-editor`. CLI version: **0.12.0**.
- Catalog platforms: `darwin-arm64, darwin-x64, linux-arm64, linux-x64, win32-x64`. Missing platforms are unsupported by this catalog.
- Exact archive URLs, SHA256 and executable/skill paths: [release catalog](https://github.com/HiQ-AI/plugins/blob/main/marketplace.json).

Use the CLI's own login and verify the account, organization, datasource and business permissions. Native plugin installation includes a bootstrap guide; compatible Cortex Hosts can materialize the matching release-owned CLI guide.

Start with the matching CLI's version and help. Do not guess commands or assume installation means readiness. Native Claude Code plugin installation does not interpret Cortex CLI provisioning fields. Codex marketplace adaptation has not been tested; production Desktop has not switched to this source. See [host compatibility](https://github.com/HiQ-AI/plugins/blob/main/docs/COMPATIBILITY.md).

## Limits and side effects

Import creates remote resources; trial calculation writes results; submission may notify reviewers. Authorize those operations for the actual target. Preflight, import, calculation and publication are separate states.

Use only authorized input, preserve originals, keep credentials out of conversations and inspect actual receipts/readback. Do not blindly repeat an uncertain write. [Shared capability and permission boundaries](https://github.com/HiQ-AI/plugins/blob/main/docs/CAPABILITIES.md) apply.

## Example request

> Inspect this authorized UPR workbook, run preflight and explain blockers without importing or submitting it.

## Workbook tasks

Workbook inspection or editing may need a separate spreadsheet capability actually available and properly licensed in the host. This plugin does not bundle or automatically install one. Anthropic's [official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) and [its license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt) are references, not proof of installation or redistribution rights. If unavailable, explain the specific gap and request CSV/JSON only where adequate; do not imply it preserves all workbook features. See [spreadsheet dependencies](https://github.com/HiQ-AI/plugins/blob/main/docs/SPREADSHEETS.md).
