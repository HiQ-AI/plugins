# HiQ Plugins

Agent plugins for life-cycle assessment, environmental product declarations and organization knowledge.

Prepare an openLCA study, work with product carbon-footprint cases, review EPD evidence, author datasets in HiQ Editor, or answer questions from your organization's published Wiki. Each plugin provides task-specific operating instructions and agent roles for its native CLI.

**Public plugin instructions do not grant access to HiQ services, licensed databases or an organization's materials.** You need the relevant CLI, account and permissions. The two expert plugins are explicitly prerelease; see their status before using them.

## Choose a plugin

<!-- catalog:start -->
| Plugin | Description |
| --- | --- |
| [cortex-org-wiki](plugins/cortex-org-wiki/README.md) | Search Nora's published organization Wiki and read versioned pages with source citations. Use the CLI's own Cortex login and the intended organization. |
| [hiq-editor](plugins/hiq-editor/README.md) | HiQ Editor toolkit: the native CLI release, its canonical UPR workflow skill and evidence-based authoring/review agents. |
| [jimu-lca](plugins/jimu-lca/README.md) | Inspect JiMULCA product carbon-footprint cases and run authorized inventory, binding and calculation operations with the user's own member credential. |
| [cortex-lca-expert](plugins/cortex-lca-expert/README.md) | Preview wrapper for cortex-lca-expert 0.1.0-dev.14: build, inspect and calculate openLCA models using the user's installed application and Cortex expert authorization. Wrapper version 0.1.0 is not a stable CLI release. |
| [cortex-epd](plugins/cortex-epd/README.md) | EPD evidence review and report interpretation with published incremental prerelease CLI 0.1.0-dev.24.candidate.41970497782.1.2. Stability and professional acceptance remain incomplete; not certification. |
<!-- catalog:end -->

openLCA still uses a `0.1.0` supply wrapper around its prerelease CLI. EPD now points directly to native incremental prerelease **0.1.0-dev.21.candidate.41755813555.1.2**, with no wrapper-version substitution. See [EPD release and Host compatibility](docs/EPD_RELEASE.md). Neither expert is a stable release or proof of completed professional acceptance.

## Install in Claude Code

Add this repository as a marketplace:

```text
/plugin marketplace add HiQ-AI/plugins
```

Then install the plugin you need, for example:

```text
/plugin install cortex-org-wiki@hiq-plugins
```

Use any plugin ID from the table in the same form, or select it through the host's plugin interface. This is a repository marketplace, not a claim of inclusion in Anthropic's official directory.

**Plugin installation loads instructions and agent roles. It does not install a CLI, log in, download databases or run business operations.** Prepare the CLI separately using [the installation guide](docs/INSTALLATION.md), verify its actual version, and complete its own login or controlled credential setup. Keep full release bundles together: expert CLIs need their sidecar assets, not just an executable copied out of an archive.

## What to expect from your host

| Host | Support boundary |
| --- | --- |
| Claude Code | Native marketplace and the plugin manifests have been validated with the installed CLI. Installation syntax is documented; no model-driven, end-to-end business workflow is claimed by this check. |
| Cortex Desktop | The root catalog carries Cortex-specific, pinned CLI supply metadata for compatible Hosts. Production Desktop has **not** switched to this repository; this publication is not a Desktop release. |
| Codex and other agents | Some expert CLIs have their own host-skill installation commands. This repository's marketplace has **not** been adapted or tested as a Codex plugin installer. Do not assume Claude Code marketplace commands apply to another host. |

See [compatibility and verification](docs/COMPATIBILITY.md) for platform coverage, tested behavior and remaining limitations.

## Use the right tool for the task

- **Building an LCA study?** Use the prerelease openLCA plugin with your own official openLCA installation and appropriately licensed databases. Dataset lookup does not calculate a model.
- **Working in JiMULCA?** Use its case workflow and the intended space/case. Local file edits do not change a remote case.
- **Preparing or reviewing an EPD?** The incremental prerelease assists with intake and evidence. A generated report is not certification, and review execution requires explicit delegation and model-cost authorization.
- **Authoring data in Editor?** Separate workbook preparation, preflight, import, trial calculation and review submission. Each has different effects; submission may notify reviewers.
- **Finding internal knowledge?** Nora reads published pages under your organization's access rules and preserves versioned citations.

## Excel and other workbook tasks

Spreadsheet capability is optional and task-specific. Ordinary Wiki searches, dataset queries or CLI case inspection do not require Excel tooling. Inspecting or editing a workbook may need a separately available, properly licensed spreadsheet capability in your host.

Anthropic's [official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) and [its license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt) are references. This repository does not copy, redistribute, fetch or automatically install it. A link is not proof that a skill is installed or that you have permission to redistribute it. See [spreadsheet task dependencies](docs/SPREADSHEETS.md).

## Data, permissions and results

Use only authorized inputs and the minimum fields needed for a service request. Keep credentials out of conversations and reports. Each CLI owns its authentication; do not borrow another application's tokens or treat plugin installation as business permission.

Imports, model edits, calculations, review execution, submission and notifications require authorization for their actual target and effects. Read back writes, retain real receipts, and report incomplete or uncertain outcomes rather than blindly repeating an operation. CLI success is not proof of professional conformity, data suitability or certification. Details: [capabilities and safety boundaries](docs/CAPABILITIES.md).

## Distribution changes

Environmental Data is now distributed through its [independent repository and marketplace](https://github.com/HiQ-AI/environmental-data), rather than listed alongside these plugins. Existing users can follow the [explicit migration guide](docs/MIGRATIONS.md); no CLI or credential migration is performed automatically.

## Documentation and contributions

- [Installation and CLI preparation](docs/INSTALLATION.md)
- [Platform support and verification](docs/COMPATIBILITY.md)
- [Capabilities, permissions and side effects](docs/CAPABILITIES.md)
- [Excel / spreadsheet dependencies](docs/SPREADSHEETS.md)
- [Catalog maintenance](CONTRIBUTING.md)

Report reproducible installation or catalog issues through [GitHub Issues](https://github.com/HiQ-AI/plugins/issues). Include the plugin, OS/architecture, CLI version and a redacted error. Do not upload credentials, private materials or customer data.

## License

Repository-authored metadata, agent roles, guides and scripts are MIT licensed; see [LICENSE](LICENSE). CLI archives, third-party software, service data, database rights, trademarks and service access retain their own terms. See [third-party notices](THIRD_PARTY_NOTICES.md).
