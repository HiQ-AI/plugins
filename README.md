# HiQ Plugins

Agent plugins for life-cycle assessment, environmental product declarations and organization knowledge.

Find background datasets, prepare an openLCA study, work with product carbon-footprint cases, review EPD evidence, author datasets in HiQ Editor, or answer questions from your organization's published Wiki. Each plugin provides task-specific operating instructions and agent roles for its native CLI.

**Public plugin instructions do not grant access to HiQ services, licensed databases or an organization's materials.** You need the relevant CLI, account and permissions. The two expert plugins are explicitly prerelease; see their status before using them.

## Choose a plugin

<!-- catalog:start -->
| Plugin | Description |
| --- | --- |
| [cortex-org-wiki](plugins/cortex-org-wiki/README.md) | Search Nora's published organization Wiki and read versioned pages with source citations. Use the CLI's own Cortex login and the intended organization. |
| [hiq-editor](plugins/hiq-editor/README.md) | HiQ Editor toolkit: the native CLI release, its canonical UPR workflow skill and evidence-based authoring/review agents. |
| [Environmental Data](plugins/querying-lca-datasets-expert/README.md) | Environmental Data: search and match environmental process data across published database sources, preserving source, version, system model, units and applicability evidence. Access depends on source and account entitlements. |
| [jimu-lca](plugins/jimu-lca/README.md) | Inspect JiMULCA product carbon-footprint cases and run authorized inventory, binding and calculation operations with the user's own member credential. |
| [cortex-lca-expert](plugins/cortex-lca-expert/README.md) | Preview wrapper for cortex-lca-expert 0.1.0-dev.14: build, inspect and calculate openLCA models using the user's installed application and Cortex expert authorization. Wrapper version 0.1.0 is not a stable CLI release. |
| [cortex-epd](plugins/cortex-epd/README.md) | Demo-only prerelease wrapper for cortex-epd 0.1.0-dev.14.candidate.39933331655.1.2. EPD pre-audit instructions come from that complete candidate. HOLD remains in effect; this is not promotion, product acceptance or certification. |
<!-- catalog:end -->

For both expert plugins, `0.1.0` in the download path and Cortex supply metadata is the **archive wrapper version**, not a stable CLI version. The executable versions are shown above. EPD's newer development source does not make a newer downloadable release available. This catalog does not supply EPD dev.21.

## Install in Claude Code

Add this repository as a marketplace:

```text
/plugin marketplace add HiQ-AI/plugins
```

Then install the plugin you need, for example:

```text
/plugin install querying-lca-datasets-expert@hiq-plugins
```

Use any plugin ID from the table in the same form, or select it through the host's plugin interface. This is a repository marketplace, not a claim of inclusion in Anthropic's official directory.

**Plugin installation loads instructions and agent roles. It does not install a CLI, log in, download databases or run business operations.** Prepare the CLI separately using [the installation guide](docs/INSTALLATION.md), verify its actual version, and complete its own login or controlled credential setup. Keep full release bundles together: expert CLIs need their sidecar assets, not just an executable copied out of an archive.

## What to expect from your host

| Host | Support boundary |
| --- | --- |
| Claude Code | Native marketplace and all six plugin manifests have been validated with the installed CLI. Installation syntax is documented; no model-driven, end-to-end business workflow is claimed by this check. |
| Cortex Desktop | The root catalog carries Cortex-specific, pinned CLI supply metadata for compatible Hosts. Production Desktop has **not** switched to this repository; this publication is not a Desktop release. |
| Codex and other agents | Some expert CLIs have their own host-skill installation commands. This repository's marketplace has **not** been adapted or tested as a Codex plugin installer. Do not assume Claude Code marketplace commands apply to another host. |

See [compatibility and verification](docs/COMPATIBILITY.md) for platform coverage, tested behavior and remaining limitations.

## Use the right tool for the task

- **Looking for environmental process data?** Start with [Environmental Data](plugins/querying-lca-datasets-expert/README.md) for multi-source discovery and matching. A match needs compatible function, units, geography, technology and period; a search hit alone does not establish suitability.
- **Building an LCA study?** Use the prerelease openLCA plugin with your own official openLCA installation and appropriately licensed databases. Dataset lookup does not calculate a model.
- **Working in JiMULCA?** Use its case workflow and the intended space/case. Local file edits do not change a remote case.
- **Preparing or reviewing an EPD?** The demo prerelease assists with intake and evidence. A generated report is not certification, and review execution requires explicit delegation and model-cost authorization.
- **Authoring data in Editor?** Separate workbook preparation, preflight, import, trial calculation and review submission. Each has different effects; submission may notify reviewers.
- **Finding internal knowledge?** Nora reads published pages under your organization's access rules and preserves versioned citations.

## Excel and other workbook tasks

Spreadsheet capability is optional and task-specific. Ordinary Wiki searches, dataset queries or CLI case inspection do not require Excel tooling. Inspecting or editing a workbook may need a separately available, properly licensed spreadsheet capability in your host.

Anthropic's [official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) and [its license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt) are references. This repository does not copy, redistribute, fetch or automatically install it. A link is not proof that a skill is installed or that you have permission to redistribute it. See [spreadsheet task dependencies](docs/SPREADSHEETS.md).

## Data, permissions and results

Use only authorized inputs and the minimum fields needed for a service request. Keep credentials out of conversations and reports. Each CLI owns its authentication; do not borrow another application's tokens or treat plugin installation as business permission.

Imports, model edits, calculations, review execution, submission and notifications require authorization for their actual target and effects. Read back writes, retain real receipts, and report incomplete or uncertain outcomes rather than blindly repeating an operation. CLI success is not proof of professional conformity, data suitability or certification. Details: [capabilities and safety boundaries](docs/CAPABILITIES.md).

## Documentation and contributions

- [Installation and CLI preparation](docs/INSTALLATION.md)
- [Platform support and verification](docs/COMPATIBILITY.md)
- [Capabilities, permissions and side effects](docs/CAPABILITIES.md)
- [Excel / spreadsheet dependencies](docs/SPREADSHEETS.md)
- [Catalog maintenance](CONTRIBUTING.md)

Report reproducible installation or catalog issues through [GitHub Issues](https://github.com/HiQ-AI/plugins/issues). Include the plugin, OS/architecture, CLI version and a redacted error. Do not upload credentials, private materials or customer data.

## License

Repository-authored metadata, agent roles, guides and scripts are MIT licensed; see [LICENSE](LICENSE). CLI archives, third-party software, service data, database rights, trademarks and service access retain their own terms. See [third-party notices](THIRD_PARTY_NOTICES.md).
