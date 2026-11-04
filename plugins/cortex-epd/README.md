# EPD review — demo prerelease

For EPD practitioners exploring engagement intake, evidence-backed pre-audit and interpretation of CLI-produced findings.

## What it does

Clarify the represented role, programme/PCR route, date and material roles; relay guided-intake questions; run a separately authorized demo review and explain the report with evidence locations.

## Install the plugin

In Claude Code:

```text
/plugin marketplace add HiQ-AI/plugins
```

```text
/plugin install cortex-epd@hiq-plugins
```

This loads instructions and agent roles, not a CLI, credentials or business data. This repository marketplace is not an official-directory listing. Prepare the CLI separately using [installation and integrity checks](https://github.com/HiQ-AI/plugins/blob/main/docs/INSTALLATION.md).

## Native CLI and requirements

- Plugin version: **0.1.1**.
- CLI executable: `cortex-epd`. Supply wrapper: **0.1.0**.
- Catalog platforms: `darwin-arm64, linux-x64, win32-x64`. Missing platforms are unsupported by this catalog.
- Exact archive URLs, SHA256 and executable/skill paths: [release catalog](https://github.com/HiQ-AI/plugins/blob/main/marketplace.json).

Requires the matching complete candidate sidecars, separately installed locked Docling 2.140.0-1 (approximately 0.8–0.9 GB download), intended CLI device login and epd-audit entitlement. A review also requires explicit delegation and model-cost authorization. An approved external template may be needed for DOCX reporting.

Start with the matching CLI's version and help. Do not guess commands or assume installation means readiness. Native Claude Code plugin installation does not interpret Cortex CLI provisioning fields. Codex marketplace adaptation has not been tested; production Desktop has not switched to this source. See [host compatibility](https://github.com/HiQ-AI/plugins/blob/main/docs/COMPATIBILITY.md).

## Limits and side effects

Executable **0.1.0-dev.14.candidate.39933331655.1.2** is demo-only and promotable:false; formal promotion remains on hold. Plugin 0.1.1 and supply wrapper 0.1.0 do not indicate a stable release. This catalog does not supply dev.21. Registration/copying materials and review execution have separate effects. A report is not a certificate or signed opinion.

Use only authorized input, preserve originals, keep credentials out of conversations and inspect actual receipts/readback. Do not blindly repeat an uncertain write. [Shared capability and permission boundaries](https://github.com/HiQ-AI/plugins/blob/main/docs/CAPABILITIES.md) apply.

## Example request

> Review this existing authorized report, trace findings to cited evidence and explain open questions without rerunning the review.

## Workbook tasks

Workbook inspection or editing may need a separate spreadsheet capability actually available and properly licensed in the host. This plugin does not bundle or automatically install one. Anthropic's [official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) and [its license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt) are references, not proof of installation or redistribution rights. If unavailable, explain the specific gap and request CSV/JSON only where adequate; do not imply it preserves all workbook features. See [spreadsheet dependencies](https://github.com/HiQ-AI/plugins/blob/main/docs/SPREADSHEETS.md).
