---
name: jimu-lca
description: "Use JiMULCA CLI for product carbon-footprint cases in JiMULCA 3.0: inspect products and units, search background data, edit authorized inventories, bind datasets and calculate."
---

# JiMULCA

Use `jimu-lca` through the host terminal. Start with `jimu-lca --version` and the relevant subcommand's `--help`; do not guess flags. This release supports macOS Apple Silicon only and requires no Node, npm or Bun.

The CLI uses the user's own `JIMU_LCA_MEMBER_KEY`, supplied through their controlled credential mechanism. It is not a Desktop login. Never ask for the key in chat, read credential files or include credentials in commands shown to the user, prompts or reports. If unavailable, stop before business API calls and ask the user to configure their own credential. Native `login` requires an addon not included in this release; do not use it as a fallback.

Discover the intended product, space and case before any changes:

```sh
jimu-lca get-units --help
jimu-lca list-products --help
jimu-lca get-case-overview --help
jimu-lca list-background-db-versions --help
```

Use returned identifiers and the user's intended target, not IDs from an old session. Read/edit/bind/calculate commands have their original business effects. Only execute writes or calculations within the user's authorization; preserve actual JSON receipts and check nonzero exits. `--errors-as-json` provides structured stderr; `--pretty` changes presentation, not success.

Ordinary name-based binding uses `search-backgrounds` and `bind-backgrounds`. UUID-based `bind-backgrounds-local` requires the separate local bridge: inspect `install-bridge --help` and get approval for its download before preparing it. Help/version do not download that resource. A source activity UUID is not an opaque Relic dataset key. Do not invent factors, identifiers or successful calculations when a dependency or permission is missing.

## Spreadsheet capability

For Excel workbook inspection or editing, use a spreadsheet capability actually available and licensed in the current host. This plugin does not install one. Anthropic's [official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) is a reference subject to its [license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt), not proof of installation or permission to copy it. If unavailable, explain the missing operation and request a suitable capability or CSV/JSON input when sufficient. Preserve the original workbook and do not claim local spreadsheet edits performed remote business writes.
