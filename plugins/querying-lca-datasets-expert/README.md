# Querying LCA Datasets

Query LCA process datasets and match inventory requirements using the self-contained querying-lca-datasets CLI, with provenance and representativeness review.

Plugin version: 0.5.1. Native CLI: `querying-lca-datasets` 0.5.1.

Installing this plugin in a native plugin host does not install its CLI. Prepare the native CLI separately with user authorization, using the exact platform archive and SHA256 in the [CLI release catalog](https://github.com/HiQ-AI/plugins/blob/main/marketplace.json). The generic installer endpoint is not a verified installation path; do not guess its URL or run a remote shell script. A compatible Cortex Host can provision the pinned CLI from the root catalog; current Desktop catalog routing is unchanged.

The CLI owns its login and business authorization. Installation does not grant data access, write permissions or permission to notify people. See [CLI requirements](https://github.com/HiQ-AI/plugins/blob/main/docs/CLI_REQUIREMENTS.md).

## Spreadsheet tasks

A workbook operation may require a separate, properly licensed spreadsheet capability. This plugin does not bundle or automatically install Anthropic XLSX. [Official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) and [its license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt) are references only. Check what the current host actually exposes; if missing, explain the operation that is blocked and request an appropriate capability or CSV/JSON input. See [spreadsheet requirements](https://github.com/HiQ-AI/plugins/blob/main/docs/SPREADSHEETS.md).

## Claude Code installation

```text
/plugin install querying-lca-datasets-expert --marketplace HiQ-AI/plugins
```

This installs plugin instructions only; prepare the CLI separately as described above.
