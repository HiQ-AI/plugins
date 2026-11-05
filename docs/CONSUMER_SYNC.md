# Automatic consumer synchronization

This market checks its registered public consumer feed every hour at minute 43
and supports a manual `Synchronize published consumers` run. It updates complete
plugin packages and exact CLI pins through one normal pull request. Automatic
merge is disabled; reviewing and merging remains separate from discovering an
update. Updating the market does not upgrade a user's installed CLI or restart a
session.

`consumer-sources.json` registers source identity, release channel, plugin IDs and
allowed archive prefixes. `consumer-lock.json` records accepted consumer sequence,
producer revision and bundle digest. The producer publishes an immutable public
bundle first and updates its short-cache discovery pointer last. Consumer package
versions are independent of the CLI version, without changing executable version or rebuilding native programs. This market
currently registers EPD incremental prereleases. EPD skills remain bound to the
published executable archive; independent EPD guidance updates are not supported
until a compatible host-guidance contract exists.

The synchronization script verifies identity, channel, SHA256, safe paths,
immutable revision and nondecreasing CLI versions. Complete source updates are
staged and checked with the existing catalog generator before replacing current
files. Downloaded scripts are not run. A bad feed preserves the existing source;
independent valid feeds may still produce an update. An unchanged feed produces
no empty commit or new PR.

The bot uses this repository's GITHUB_TOKEN only. Because token-created PR events
do not start normal PR CI, it explicitly dispatches the existing static validation
workflow on the exact pushed head. Validation checks that head before and after
running the catalog check. No synthetic successful status or bypass is used. The
workflow neither approves nor merges PRs. If repository policy denies PR creation,
the pushed automation branch is retained and reused on the next run; no personal
or cross-repository token is substituted.

For recovery, inspect the workflow summary and producer release. Fix the producer
and publish a new valid consumer revision rather than rewriting immutable bytes
or deleting lock entries. Retain source/channel boundaries during rollback; a CLI
downgrade requires a deliberate reviewed change outside automatic synchronization.

The producer implementation and authority are maintained in
[HiQ-AI/cortex](https://github.com/HiQ-AI/cortex/blob/main/docs/PUBLIC_CONSUMER_SYNC.md).
This repository carries only reviewed consumer tooling and public packages.

## Unconnected supply sources

The registered cortex-org-wiki, hiq-editor, jimu-lca and cortex-lca-expert entries
are explicitly blocked, not automatically updated. Their current pins and files
are retained. The workflow summary lists them separately from actual feed errors;
a healthy EPD no-op is not failed because these dependencies remain open. See
[compatible publisher recovery](https://github.com/HiQ-AI/plugins/issues/8).
