# Installation and CLI preparation

## 1. Install a plugin's instructions

In Claude Code, add the marketplace:

```text
/plugin marketplace add HiQ-AI/plugins
```

Install one or more plugins by ID:

```text
/plugin install cortex-org-wiki@hiq-plugins
/plugin install hiq-editor@hiq-plugins
/plugin install querying-lca-datasets-expert@hiq-plugins
/plugin install jimu-lca@hiq-plugins
/plugin install cortex-lca-expert@hiq-plugins
/plugin install cortex-epd@hiq-plugins
```

These are Claude Code interface commands, not shell commands. Choose only the plugins you need. The last two are prerelease; EPD is demo-only. This repository is an independently maintained marketplace, not an official-directory listing.

## 2. Prepare the corresponding native CLI

A native plugin installation does not interpret the Cortex `components.cli` fields. It does not provision binaries, login, install optional runtimes or configure another host.

The [root catalog](../marketplace.json) is the authority for each supported OS/architecture, exact archive URL, SHA256, executable path and release-owned skill path. A trusted compatible Cortex Host can consume those fields. Current production Desktop still uses its existing source.

For manual preparation:

1. Choose the exact platform entry in the catalog. If your platform has no entry, it is unsupported by this catalog; do not run another platform's binary.
2. Download its archive into a new directory. Verify the entire archive against the listed SHA256 **before** extraction or execution. Downloading an archive is not permission to run it.
3. Extract the complete archive. Preserve the directory structure and sidecars; do not copy only the executable. Expert archives contain `upstream/` and a wrapper manifest. Other archives use their own release layout.
4. Invoke the listed relative executable from the extracted release root by its absolute path, or register it through the CLI's own documented installation process after authorization. On Windows use native PowerShell quoting and the release's Windows executable/entry; do not require a POSIX shell.
5. Check version and help using that exact release. The expert archives use supply wrapper `0.1.0`, but their executables report prerelease versions. A plugin version, archive directory name or successful download does not prove runtime readiness.
6. If using a release-owned operating skill in another host, use that CLI's documented skill installation mechanism. Do not overwrite an existing customized skill, register all hosts or change global permissions without authorization.

Publisher entry points are available for [Editor](https://download.hiq.earth/cli/hiq-editor/install.md), [Nora](https://download.hiq.earth/cli/cortex-org-wiki/install.sh) and [JiMU](https://download.hiq.earth/cli/jimu-lca/install.sh). Inspect the instructions and platform/version before running an installer. A script link is not a recommendation to pipe an uninspected response into a shell. For Environmental Data and both expert previews, use the pinned archives; do not infer a current installer URL from the CLI name.

The proposed newer EPD `experts/cortex-epd/latest.json` and `install.sh` endpoints returned HTTP 403 during verification on 2026-11-04. They are not usable public installation paths in this guide. The catalog's older candidate archives are separate, accessible artifacts; they are not a release of dev.21.

## 3. Confirm version and access

Run the relevant discovery command only after trusting and preparing the release:

| Plugin | Version / discovery | Access and dependencies |
| --- | --- | --- |
| Nora | `cortex-org-wiki --version`, `--help` | CLI device login and intended organization membership; published Wiki pages only |
| Editor | `hiq-editor version --json`, `--help` | CLI login, correct account/organization/datasource and business permissions |
| Environmental Data | `querying-lca-datasets version`, `--help` | CLI device/QR login or controlled API-key configuration; dataset access depends on entitlements |
| JiMU | `jimu-lca --version`, `--help` | macOS arm64; user's controlled member-key configuration; this archive does not include the addon required by native login |
| openLCA modeling | `cortex-lca-expert version`, `--help`, `status --offline` | Official openLCA installation, selected workspace/database, CLI device login and `lca-modeling-expert` entitlement; ordinary modeling does not require Pi/model login |
| EPD demo | `cortex-epd version -f json`, `--help`, `doctor --offline -f json` | Matching candidate's full sidecars, separately installed locked Docling 2.140.0-1 (approximately 0.8–0.9 GB download), CLI device login and `epd-audit` entitlement for reviews |

Do not put member keys or API keys in chat. Use the CLI's existing controlled credential mechanism. Do not inspect credential files or copy tokens from Desktop or another checkout. A missing entitlement is an access limitation, not a reason to switch endpoints or identities.

EPD offline doctor can report not ready when Docling or authentication is missing. That is not permission to download, log in, start a review or incur model costs automatically. A review requires a confirmed engagement, authorized materials and explicit model-cost authorization. The demo candidate is not approved for formal promotion or certification.

## 4. Start with a bounded task

Choose the actual target organization, datasource, database, product/case or review engagement before operating. Ask the agent to discover native help and inspect existing state first. Authorize any imports, edits, calculations or submission separately when the task has not already authorized them. Preserve source files and actual receipts.

For workbook tasks, read [spreadsheet dependencies](SPREADSHEETS.md). For platform coverage and the distinction between manifest checks and real business acceptance, read [compatibility](COMPATIBILITY.md).
