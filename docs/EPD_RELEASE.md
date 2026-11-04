# EPD incremental prerelease supply

## Versions and native layout

- Plugin package: **0.1.3**.
- Actual CLI: **0.1.0-dev.22.candidate.41820743400.1.2**, built with Bun 1.4.4.
- Platforms: macOS arm64, Linux x64 and Windows x64. Intel Mac is unsupported.
- [Publisher release](https://github.com/HiQ-AI/cortex/releases/tag/epd-v0.1.0-dev.22.candidate.41820743400.1.2).
- [Immutable release receipt](https://download.hiq.earth/experts/cortex-epd/v0.1.0-dev.22.candidate.41820743400.1.2/release.json).
- [Installation guide](https://download.hiq.earth/experts/cortex-epd/install.md).

The catalog uses the executable's real prerelease version and the original native
archives. `format: expert-release` selects `release-manifest.json`, executable
`cortex-epd` (`.exe` on Windows), and
`assets/skills/epd-audit/SKILL.md`. No wrapper or repacked binary is produced.
Keep the complete release, including signing/build declarations, parser lock
and domain sidecars. The host operating skill and schema command reference are
copied exactly from the matching release; the internal professional-verifier
skill is not exposed as an independent host skill.

| Platform | Archive SHA256 |
| --- | --- |
| darwin-arm64 | `f30fdd7a623c6c4604da2642274e841b958ea3e9c48f5a6560d1d3428e8c654f` |
| linux-x64 | `fdbcfbe76e630260e156f7fba0a9b930e08880964a9f0ba00a382ca765ca18a5` |
| win32-x64 | `1efe0ce7e85fbc6604bf75e8acca97070c904f5795562fb5f9418eff5fd875a1` |

These are archive hashes, not executable hashes. The root catalog pins the exact
versioned URLs. Each platform's `download-manifest.json` records archive length,
archive hash and the matching release-manifest hash.

## Report change

Dev22 fixes mixed-scope finding groups: when a group contains both explicit
product items and whole-case items, Markdown, HTML and DOCX product columns
indicate that whole-case items are also present. Native full institution opinions
and mapped opinions preserve that scope. Pure-product and pure-whole-case groups
keep their existing presentation.

The fix uses structured item product scope. It does not infer products from
professional prose, change machine JSON, findings, severity, grouping keys,
human decisions or metrics, or introduce a new schema. The release-owned
`references/report.md` remains unchanged; `SKILL.md` and the generated command
reference carry the new CLI version. No separate hand-edited schema copy is added.

## Evidence

This catalog update downloaded all three public archives and checked their exact
length and SHA256 against the actual platform download manifests. It also checked
the release-manifest hashes and copied the macOS archive's operating skill and
references byte-for-byte. Other plugins and their pins are unchanged.

The publisher records a public dev21-to-dev22 upgrade, actual version/Bun output,
`doctor --offline` ready state, strict native macOS signature verification and
Markdown/HTML re-export of the existing case. Original machine JSON and older
reports were preserved; no new review or model run was made. See the
[publisher's evidence](https://github.com/HiQ-AI/cortex/issues/2615#issuecomment-6630049195)
and release notes. This consumer update reuses that evidence rather than repeating
the original case or installation lifecycle.

## Host compatibility and requirements

Cortex Hosts need explicit `expert-release` support for actual prerelease versions,
immutable `/experts/NAME/vVERSION/` URLs and native release manifests. Older
wrapper-only Hosts cannot consume this entry. This repository update does not
switch production Desktop's catalog or publish Desktop. Native Claude Code plugin
installation supplies instructions, not the CLI or credentials.

Prepare locked Docling 2.140.0-1 separately. Reviews require the intended CLI
device login, `epd-audit` entitlement, a confirmed engagement, authorized materials
and explicit model-cost approval. Installation or report export does not authorize
a new review. CLI upgrades do not automatically replace host skill copies.

## Remaining limits

This is a published incremental prerelease, not stable or full professional
acceptance. Cumulative stability, complete normative coverage, clean holdout and
institution-approved templates remain unaccepted. The publisher's DOCX evidence
includes targeted tests and existing-result projection, not public execution
against an institution-authorized template. Original failures and candidate
`promotable:false` evidence remain intact.

macOS uses Developer ID/notarization. Windows is explicitly unsigned /
Authenticode NotSigned and may show SmartScreen; do not disable protections.
Linux signing is not applicable. Reports and successful CLI exits are not
certificates or signed opinions. No model review or original material was rerun
for this catalog update.
