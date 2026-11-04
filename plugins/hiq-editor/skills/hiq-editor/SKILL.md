---
name: hiq-editor
description: "Operate an already installed HiQ Editor CLI for authorized UPR preflight, import, trial calculation and readback, using native help and actual receipts."
---

# HiQ Editor

This public repository guide bootstraps an independently installed `hiq-editor` CLI; it is not a copy of the release-owned operating skill. A compatible Cortex Host replaces this file with the canonical skill from the pinned CLI release. In other hosts, use native CLI help as command authority. Do not assume the plugin installer provisions a binary.

Check `hiq-editor --help`, `hiq-editor version --json`, and `hiq-editor doctor`. Discover each intended command and its help/schema before use; do not invent flags, identifiers or a new HTTP/MCP integration. If the executable is unavailable, explain the missing CLI and refer to the plugin README instead of silently downloading or running an installer.

The CLI owns authentication. User-authorized device login is separate from plugin installation. Never inspect credential files, print secrets, borrow provider/Desktop tokens or switch identity without authorization. Verify the intended account, organization and datasource. Installation or doctor success does not grant permission for a business write.

Inspect authorized UPR inputs, perform preflight before import, preserve nonzero exits and inspect actual readback. Import creates remote resources and trial calculation writes results: execute only when the user authorized the target and action. Submission can notify reviewers and needs explicit submission authorization. Do not blindly repeat writes after a timeout or fabricate completion.

For workbook inspection/editing use a spreadsheet capability actually available in the host, preserving original files. Anthropic's [XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) is an optional reference subject to its [own license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt), not an installed dependency. No third-party spreadsheet skill is bundled here. When unavailable, state the gap and request a suitable capability or CSV/JSON only if it preserves what the task needs. Business preflight/readback remains authoritative for Editor operations.

Return performed actions, actual receipts, unresolved findings and the next necessary action. Do not equate a local workbook edit, import success or a trial result with approved publication.
