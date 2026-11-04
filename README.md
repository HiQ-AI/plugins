# HiQ Plugins

Public plugins for HiQ services: native agent roles, operating guides and pinned CLI supply metadata. This repository contains no standalone skill collection, business credentials or CLI binaries.

| Plugin | Plugin version | CLI version | CLI platforms |
| --- | --- | --- | --- |
| Nora organization Wiki (`cortex-org-wiki`) | 0.1.6 | 0.1.5 | macOS arm64/x64, Linux arm64/x64, Windows x64 |
| HiQ Editor (`hiq-editor`) | 0.12.0 | 0.12.0 | macOS arm64/x64, Linux arm64/x64, Windows x64 |
| Querying LCA Datasets (`querying-lca-datasets-expert`) | 0.5.1 | 0.5.1 | macOS arm64/x64, Linux arm64/x64, Windows x64 |
| JiMULCA (`jimu-lca`) | 0.2.2 | 0.2.1 | macOS arm64 only |

EPD and LCA expert prerelease packages are not included. This is a fresh repository, not a public copy of the previous catalog's history.

## Installation and host support

The Cortex-format `marketplace.json` pins CLI downloads and SHA256 digests. A compatible Cortex Host provisions the declared native CLI, verifies its release and materializes release-owned operating skills. **Current Desktop clients still use their existing catalog; this publication does not migrate or release Desktop.**

The `.claude-plugin/marketplace.json` is the Claude Code plugin index. In Claude Code, add `HiQ-AI/plugins` as a plugin marketplace and install a selected plugin through the native plugin interface. Plugin installation loads its skills and agents; it does **not** run a CLI installer or provision a binary. Prepare the corresponding CLI separately using the publisher's documented installation process. See each plugin's README and [CLI requirements](docs/CLI_REQUIREMENTS.md). No install hooks, MCP server or login automation is bundled.

Plugin roles and guides do not grant service access. Each CLI retains its own login, organization and data permissions. Never paste credentials into a conversation or copy authentication from another application. Business writes, calculations and submissions require the user's authorization for the actual target.

## Excel / XLSX

A workbook task may need a spreadsheet capability in addition to a business CLI. This is an **optional task dependency**, not a prerequisite for every plugin task. Plugin guides state what to do when a workbook is involved.

Anthropic's official XLSX skill is available at:
- [Official skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md)
- [Applicable license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt)

These are references, not an automatic install or a license grant. This repository does not copy, redistribute or automatically fetch that skill. Use the host's available, properly licensed spreadsheet capability, or ask the user to enable one through their host's supported interface. Do not claim a URL means the skill is installed. If unavailable, explain the limitation and request a CSV/JSON export where suitable; do not rename a CSV file to `.xlsx` or silently modify the original workbook. Details: [spreadsheet dependencies](docs/SPREADSHEETS.md).

## Maintenance

The Cortex catalog is the authority for plugin identities, versions and CLI pins; the Claude Code index is a generated projection. After editing the catalog or plugin manifests:

```bash
npm run generate
```

```bash
npm test
```

CI performs static catalog validation on a GitHub-hosted runner, not an internal self-hosted runner. It does not execute native CLI downloads, business calls, models or desktop tests. There is no release/deployment workflow.

## License

Repository-authored metadata, agent definitions, guides and scripts are MIT licensed; see [LICENSE](LICENSE). This does not license third-party skills, downloaded CLI binaries, service data, trademarks or service access. CLI archives retain their publisher's terms. See [third-party boundaries](THIRD_PARTY_NOTICES.md).
