# JiMULCA — product carbon-footprint cases

For practitioners working with products, inventories and carbon-footprint cases in JiMULCA 3.0.

## What it does

Inspect products/cases and units; prepare inventories; edit, bind backgrounds and calculate when authorized; explain actual contributions and gaps.

## Install the plugin

In Claude Code:

```text
/plugin marketplace add HiQ-AI/plugins
```

```text
/plugin install jimu-lca@hiq-plugins
```

This loads instructions and agent roles, not a CLI, credentials or business data. This repository marketplace is not an official-directory listing. Prepare the CLI separately using [installation and integrity checks](https://github.com/HiQ-AI/plugins/blob/main/docs/INSTALLATION.md).

## Native CLI and requirements

- Plugin version: **0.2.2**.
- CLI executable: `jimu-lca`. CLI version: **0.2.1**.
- Catalog platforms: `darwin-arm64`. Missing platforms are unsupported by this catalog.
- Exact archive URLs, SHA256 and executable/skill paths: [release catalog](https://github.com/HiQ-AI/plugins/blob/main/marketplace.json).

macOS Apple Silicon only. Supply your own member key through the CLI's controlled credential mechanism, never chat. This archive lacks the addon needed for native login.

Start with the matching CLI's version and help. Do not guess commands or assume installation means readiness. Native Claude Code plugin installation does not interpret Cortex CLI provisioning fields. Codex marketplace adaptation has not been tested; production Desktop has not switched to this source. See [host compatibility](https://github.com/HiQ-AI/plugins/blob/main/docs/COMPATIBILITY.md).

## Limits and side effects

Choose the intended product, space and case before changes. Name-based binding does not need the optional local bridge; UUID-based local binding needs separately authorized bridge preparation. Local workbook edits do not modify a remote case.

Use only authorized input, preserve originals, keep credentials out of conversations and inspect actual receipts/readback. Do not blindly repeat an uncertain write. [Shared capability and permission boundaries](https://github.com/HiQ-AI/plugins/blob/main/docs/CAPABILITIES.md) apply.

## Example request

> Read the selected case and explain its inventory units and background choices without editing or recalculating it.

## Workbook tasks

Workbook inspection or editing may need a separate spreadsheet capability actually available and properly licensed in the host. This plugin does not bundle or automatically install one. Anthropic's [official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) and [its license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt) are references, not proof of installation or redistribution rights. If unavailable, explain the specific gap and request CSV/JSON only where adequate; do not imply it preserves all workbook features. See [spreadsheet dependencies](https://github.com/HiQ-AI/plugins/blob/main/docs/SPREADSHEETS.md).
