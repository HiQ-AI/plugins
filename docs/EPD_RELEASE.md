# EPD incremental prerelease supply

## Versions and native layout

- Plugin package: **0.1.2**.
- Actual CLI: **0.1.0-dev.21.candidate.41755813555.1.2**, built with Bun1.4.4.
- Platforms: macOS arm64, Linux x64, Windows x64. Intel Mac is unsupported.
- Source: the publisher's immutable `experts/cortex-epd/vVERSION/PLATFORM/` archives and matching download/release manifests. [Installation guide](https://download.hiq.earth/experts/cortex-epd/install.md).

Unlike the retired catalog supply wrapper, this entry points directly to the original native release. `components.cli.version` is the executable's actual prerelease version. `format: expert-release` selects `release-manifest.json`, executable `cortex-epd` (`.exe` on Windows), and `assets/skills/epd-audit/SKILL.md`. No new wrapper or repacked binary is created.

The full archive SHA256 is pinned in [the root catalog](../marketplace.json). Preserve the whole native release, including its signing/build declarations, parser lock and domain sidecars. The complete host operating skill and its references are materialized from the same release; the internal professional-verifier skill is not exposed as an independent host skill.

## Host compatibility

The new supply format requires a Cortex Host with explicit `expert-release` support: actual prerelease versions, immutable `/experts/NAME/vVERSION/` URLs and the native release-manifest layout. Older Hosts that only accept `/cli/` wrappers cannot consume this entry. Do not label the new executable as wrapper0.1.0 to evade their validation.

This repository is not production Desktop's configured source, and this update does not switch it or publish Desktop. A compatible Host build and its own release/acceptance gates are prerequisites before adopting the updated Cortex catalog. Native Claude Code plugin installation remains instruction-only and does not provision the CLI; use the publisher's verified native installation process separately.

## What changed

The publisher reports an updated Bun runtime/network-error classification, explicit rereading of frozen engagement/selected-check catalogs after compaction, bounded native compaction continuation, and DOCX report fidelity fixes. These are incremental fixes, not a claim that production network disconnects or all professional acceptance requirements are solved.

## Requirements and limitations

Prepare the locked Docling2.140.0-1 runtime separately after verifying the download length/hash. Reviews require the intended CLI device login, `epd-audit` entitlement, a confirmed engagement and explicit model-cost authorization. Installation and offline inspection do not authorize a review. An approved external template may be needed for DOCX reporting.

macOS release bytes carry the publisher's Developer ID/notarization declaration. Windows is explicitly **unsigned / Authenticode NotSigned** and can show SmartScreen; do not disable OS protections. Linux signing is not applicable.

This is a **published incremental prerelease**, not stable or full professional/product acceptance. Cumulative same-candidate repeat-run stability, complete normative coverage, clean holdout and institution-approved templates remain incomplete. A real-case run exhausted native network retries and remained blocked without a final report. The original immutable candidate's `promotable:false` evidence is retained; public incremental distribution does not rewrite it as acceptance.

Reports and successful CLI exits are not certificates or signed opinions. No paid end-to-end review is repeated for this catalog update. The supply check exercises installation/extraction, actual version, release-owned skill materialization and native discovery only.
