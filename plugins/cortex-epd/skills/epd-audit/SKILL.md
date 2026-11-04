---
name: epd-audit
description: "Prepare an authorized EPD review engagement or explain existing cortex-epd findings and evidence using its matching CLI. This catalog supplies a demo-only prerelease; not a calculation engine or certification service."
metadata:
  cli-version: "0.1.0-dev.14.candidate.39933331655.1.2"
---

# EPD review — demo prerelease

This plugin supplies a host operating guide, not a second verification engine. The pinned executable is **0.1.0-dev.14.candidate.39933331655.1.2**. Archive wrapper `0.1.0` and plugin `0.1.1` are different versions. The candidate is demo-only, `promotable:false`, and remains on hold for formal promotion. Do not describe it as dev.21, an accepted production reviewer or a source of certification.

## Discover and check readiness

Use the existing `cortex-epd` executable with its complete matching sidecars. If absent, read the [plugin installation requirements](https://github.com/HiQ-AI/plugins/blob/main/plugins/cortex-epd/README.md). Do not invent a new installer URL or automatically install a CLI, parser, skill or host configuration.

Run `cortex-epd version -f json` and compare `data.version` with this guide's `metadata.cli-version`. A mismatch must be reported before applying candidate-specific instructions. Read `cortex-epd --help` and the intended command's help/schema; the running executable owns its input and result contracts. A compatible Cortex Host can replace this guide with the release-owned operating skill at the catalog's `skillPaths` location. Other hosts use this guide plus native help; do not pretend it was materialized by native plugin installation.

For a read-only environment request use `cortex-epd doctor --offline -f json` and inspect `data.ready`, not only process exit zero. This does not authorize setup, device login, a Docling download or a review. The locked Docling runtime 2.140.0-1 is a separate verified installation (approximately 0.8–0.9 GB download). Follow the CLI's actual readiness report. Reviews require the intended user's CLI authorization and `epd-audit` entitlement; never borrow a Desktop token, inspect credential files, request secrets in chat or redirect authenticated requests.

## Prepare the engagement

Confirm the represented role, requested stage, programme/PCR route and version, audit date, authorized materials and each material's role. Do not infer these from filenames, logos or today's date. Inspect the candidate's profile/schema coverage and relay actual guided-intake questions. Do not select a different engagement to bypass a missing route or treat an EPD-only public review as a verifier engagement missing all private evidence.

Registration, copying materials into a case, adding files, setup and runtime installation need authorization for their effects. Review execution additionally requires explicit delegation and model-cost authorization. Installing the plugin or obtaining a ready doctor result does not provide that authorization.

## Execute and explain only authorized work

Use documented CLI operations and real backend/case identifiers; do not edit case files, prompts, findings or professional decisions directly. Keep the same case and background-run handle, relay input requests, retain the actual exit/result and distinguish blocked, needs-input, completed and interrupted states. Do not create a replacement case or blindly repeat a review to hide an uncertain outcome. Re-review can incur new model costs and needs applicable consent.

Read only the report path actually returned by the CLI. Use [report interpretation](references/report.md) for evidence locations, human-decision layers and limitations, and [troubleshooting](references/troubleshoot.md) for candidate-specific recovery. Public-review risk notes, owner corrections and formal review findings have different meanings. Do not invent evidence, close findings, issue a certificate or turn process completion into a signed opinion. A requested DOCX report may also need the user's approved external template; plugin installation does not provide one.

## Spreadsheet tasks

A general workbook inspection/edit may need a spreadsheet capability actually available and properly licensed in the host. The locked parser and a general workbook editor are distinct dependencies. Anthropic's [official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) and [license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt) are references, not bundled or auto-installed components. State any capability gap; request CSV/JSON only when adequate and never claim it preserves all workbook features. Preserve originals and upload only authorized material within the confirmed engagement.
