---
name: lca-modeling
description: "Prepare, model, calculate and interpret an authorized openLCA study from process records, inventory tables or an existing model using the matching prerelease cortex-lca-expert CLI."
---

# openLCA modeling — prerelease

The pinned executable is **0.1.0-dev.14**. Plugin `0.1.1` and archive supply wrapper `0.1.0` are not a stable CLI release. Use the user's official openLCA installation and appropriately licensed databases; this plugin is not an openLCA distribution and grants no background-data rights.

## Discover and prepare

Use the existing complete `cortex-lca-expert` release, including its native Java and operating assets. If unavailable, explain the missing CLI and use the [installation requirements](https://github.com/HiQ-AI/plugins/blob/main/plugins/cortex-lca-expert/README.md); do not run an installer automatically. A compatible Cortex Host can materialize the archive's release-owned skill. A native plugin installation supplies this host guide, not a binary or installation automation.

Inspect `cortex-lca-expert version`, `--help`, `status --offline` and `config show` without changing configuration. Compare the actual executable version before following candidate-specific instructions. Discover the intended command and `schema` contracts from the running CLI; do not guess JSON fields, revive an old bridge, build a replacement HTTP/MCP client or treat a nonzero exit as an empty model.

Business operations require the CLI's own device login, the intended organization and `lca-modeling-expert` entitlement. Ordinary modeling does not require Pi or model login. Missing authentication or an openLCA installation is a concrete blocker, not permission to borrow tokens, download another runtime, switch identities or change host permissions. Never inspect credential files or expose credentials in conversation/output.

## Establish the study and target

Clarify intended use, functional/reference unit, system boundary, period, measured inputs, allocation assumptions and data rights. Keep source locations, conversions and unresolved gaps attached to the study. Preserve originals; a BOM does not by itself establish a complete inventory. Ask about ambiguities that change the result rather than filling them with assumptions disguised as facts.

Confirm the selected openLCA installation, workspace/database and native model identifiers before writes or calculations. Do not import, restore, replace or delete a database, start a service or calculate merely because a plugin is installed. Retain each operation's actual receipt and native identifiers. Inspect existing state after an uncertain write before retrying. Do not edit internal project artifacts to manufacture success.

Discover the relevant entity/project/system/calculation commands and inputs through help/schema. Follow documented request identities and recovery semantics. Keep native editable models, saved study assumptions and run evidence in their proper roles. A successful entity check tests structure/references, not professional conformity or background-data quality.

## Interpret actual results

Use [study and result interpretation](references/study-interpretation.md) when preparing research drafts, comparing scenarios or explaining zeros/negative values. Verify actual demand and unit basis, impact category, method, model and source versions. Trace signed contributions and effective factors before explaining a result; do not discard negative flows, invent missing factors or change units by label alone.

Compare scenarios only on a disclosed compatible basis and preserve each run's inputs/results. Additional sensitivity or Monte Carlo runs require authorization for their actual effects. A successful calculation is not ISO conformity, an approved EPD or certification. Return performed work, actual evidence, assumptions and unresolved limitations.

## Spreadsheet tasks

For workbook inspection or preparation use an available, properly licensed spreadsheet capability in the host. Anthropic's [official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) and [its license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt) are references only; this plugin neither bundles nor installs it. Explain missing capabilities and request CSV/JSON only where adequate. Local workbook edits do not update the native model; any import or model edit needs its own applicable authorization.
