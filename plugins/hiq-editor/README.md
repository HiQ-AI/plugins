# HiQ Editor

HiQ Editor toolkit: the native CLI release, its canonical UPR workflow skill and evidence-based authoring/review agents.

Plugin version: 0.12.0. Native CLI: `hiq-editor` 0.12.0.

Installing this plugin in a native plugin host does not install its CLI. Review the [publisher installation entry](https://download.hiq.earth/cli/hiq-editor/install.md) and prepare the native CLI separately with user authorization. Do not run a download script merely because this README links it. A compatible Cortex Host can provision the pinned CLI from the root catalog; current Desktop catalog routing is unchanged.

The CLI owns its login and business authorization. Installation does not grant data access, write permissions or permission to notify people. See [CLI requirements](https://github.com/HiQ-AI/plugins/blob/main/docs/CLI_REQUIREMENTS.md).

## Spreadsheet tasks

A workbook operation may require a separate, properly licensed spreadsheet capability. This plugin does not bundle or automatically install Anthropic XLSX. [Official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) and [its license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt) are references only. Check what the current host actually exposes; if missing, explain the operation that is blocked and request an appropriate capability or CSV/JSON input. See [spreadsheet requirements](https://github.com/HiQ-AI/plugins/blob/main/docs/SPREADSHEETS.md).

## Claude Code installation

```text
/plugin install hiq-editor --marketplace HiQ-AI/plugins
```

This installs plugin instructions only; prepare the CLI separately as described above.
