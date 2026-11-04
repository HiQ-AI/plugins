# Compatibility and verification

## Platforms supplied by this catalog

| Plugin | macOS arm64 | macOS x64 | Linux arm64 | Linux x64 | Windows x64 |
| --- | --- | --- | --- | --- | --- |
| Nora | Yes | Yes | Yes | Yes | Yes |
| HiQ Editor | Yes | Yes | Yes | Yes | Yes |
| Dataset lookup | Yes | Yes | Yes | Yes | Yes |
| JiMU | Yes | No | No | No | No |
| openLCA modeling — prerelease | Yes | No | No | Yes | Yes |
| EPD review — demo prerelease | Yes | No | No | Yes | Yes |

“Yes” means a pinned archive exists in [the catalog](../marketplace.json), not that every workflow has been accepted on that platform. JiMU has no Windows fallback in this catalog. Preserve all archive sidecars on supported platforms.

## Host boundaries

- **Claude Code:** `.claude-plugin/marketplace.json` uses the native repository-marketplace format, generated from the root catalog. Plugin instructions and agents load through the native plugin mechanism; Cortex binary provisioning is not part of native plugin installation. This repository is not an official-directory submission.
- **Cortex Desktop:** the root `marketplace.json` is a typed Cortex catalog with CLI supply metadata. Compatible Hosts can provision CLI archives and materialize their release-owned skills. Production Desktop has not switched to this repository, and no Desktop binary is released by this repository.
- **Codex / WorkBuddy / other hosts:** an individual CLI may offer host-specific installation commands. Those commands do not establish this marketplace's compatibility with that host. No Codex marketplace adaptation or end-to-end validation is claimed here.

## Public repository verification — 2026-11-04

Checks distinguish package integrity from professional or business acceptance:

| Check | Evidence / boundary |
| --- | --- |
| Catalog consistency | Local static check enforces the six declared plugin IDs, plugin/manifest versions, declared skill and agent paths, CLI pins and generated native index. GitHub-hosted CI runs the same check without credentials or business calls. |
| Native manifests | `claude plugin validate` checks the generated marketplace and six plugin manifests. It does not execute a model-driven workflow, install CLI dependencies or prove business correctness. Optional listing icons are not supplied. |
| New expert archive integrity | Both macOS arm64 archives were downloaded and their entire SHA256 digests matched the catalog. Full bundles were extracted for isolated discovery checks. |
| Actual openLCA CLI | The macOS binary's `version` reports `0.1.0-dev.14`; `--help` exits successfully. No openLCA database/service was opened or modified in these checks. |
| Actual EPD CLI | The macOS binary's `version -f json` reports `0.1.0-dev.14.candidate.39933331655.1.2`; `--help` exits successfully. No Docling installation, login, model call, review or report generation was performed. |
| Download availability | Pinned expert archives have accessible CDN entries. Newer EPD `experts/cortex-epd/latest.json` and `install.sh` returned HTTP 403; they are not advertised as installation paths. |

The macOS discovery checks used an isolated HOME and no business credentials. Windows/Linux archive entries do not imply a new Windows/Linux execution test in this repository update. The four existing CLI pins are unchanged; this update does not re-accept their business workflows.

## Prerelease limits

openLCA and EPD archives both use a `0.1.0` supply wrapper. That value is not their executable version and does not turn either into a stable release. EPD's candidate is demo-only, `promotable:false` in its release evidence, and remains on hold for formal promotion. A newer source revision or development version is not proof that a public archive was released.

Do not use installation, manifest validation, an HTTP 200, CLI exit zero or a rendered report as evidence of product acceptance, ISO conformity, a signed verification opinion or certification.
