# Native CLI requirements

The root Cortex catalog pins archive URL, SHA256, executable path, version and platforms for each CLI. It is supply metadata, not an executable installer. Claude Code plugin installation loads plugin skills/agents but does not interpret these Cortex-specific supply fields.

Prepare the CLI separately using its publisher installation instructions or a compatible trusted Host. Check the actual executable version and help before business use. Do not infer CLI readiness from plugin installation or auto-run remote shell scripts. JiMU 0.2.1 supports macOS Apple Silicon only; do not substitute a binary for another OS.

Editor operates authorized UPR business workflows; dataset lookup is read-only matching within service data entitlements; Nora reads published organization Wiki through its own login; JiMU uses its existing member-key mechanism and separately authorized case operations. No credentials, automatic login, generic token injection, MCP server or installation hooks are included.

Workbook handling can require an additional host capability. See [SPREADSHEETS.md](SPREADSHEETS.md); a skill URL neither installs a capability nor grants third-party redistribution rights.
