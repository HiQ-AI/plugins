# Troubleshooting

Start with `doctor -f json` (or `--offline` to avoid online entitlement checks). Doctor is read-only and returns `data.ready`; a zero process exit alone does not prove readiness. Setup reuses doctor and returns exit 20 if not ready.

| Symptom | Action |
| --- | --- |
| `NOT_AUTHENTICATED`, expired login | Run auth login for the intended user. Relay stderr URL/code; do not collect a password. |
| `CREDENTIAL_INVALID` | Report the exact error; do not copy a credential from another account or checkout. |
| `ENTITLEMENT_REQUIRED` | Ask for expert:epd-audit access. Do not bypass the configured Cortex channel. |
| `RUNTIME_MISSING` or failed docling check | Follow runtime-release digest/length hints, install the locked runtime separately, configure docling.root, repeat setup. |
| `PARSE_FAILED` | Read the identified file/reason. Ask for a supported readable PDF/DOCX/XLSX or corrected original; never substitute invented text. |
| `no-text-layer` / unreadable pages | Inspect the named original material and page numbers. A successful parser exit is not proof that those pages were read. A submitted absence becomes unknown; if no readable evidence target is located, the host returns cannot_determine with unread status instead of claiming the item is missing. Readable located targets can still be reviewed, with the page limitation disclosed. Ask for a readable original or an authorized text-bearing copy, not a guessed absence. |
| Pack/coverage blocked | Show the reported scope or criterion. Do not select a different standard or engagement without user agreement. |
| `REAUDIT_REQUIRED` | Explain that an old fingerprint already has completed results and a new review can incur model costs. Ask for explicit consent before `run CASE --fresh`; keep old results and do not create a replacement case to evade the gate. |
| Host tool permission denied | Stop and report the blocked operation. Claude Code only preapproves the listed read-only CLI commands, not writes or reviews; deny/ask rules override that list. Codex uses host approvals/sandbox, not skill permission metadata. Do not change host settings or disguise commands. |
| Budget or model failure | Preserve the case and reason. Resume only when appropriate; do not change budgets, declare success or create a replacement case to hide failure. |
| Occupied case / active lock | Read observe; wait for your own run. For permanent cancellation, SIGINT your own run, await exit, then case cancel. A different holder requires coordination, not killing it. |
| Existing output differs | Choose a new authorized output filename. Do not overwrite an unrelated report/export. |
| Sidecar digest mismatch | Reinstall the approved CLI bundle. Do not disable validation or edit the manifest. |
| Installed operation skill mismatch | Compare the loaded SKILL path and `metadata.cli-version` with `version -f json` (`data.version`); report a mismatch before following stale instructions. `skill list -f json` and `doctor --offline -f json` include user-level installation states and per-host hints. For an unmodified managed copy use `cortex-epd skill install --agent claude-code -f json` or `cortex-epd skill install --agent codex -f json`. User edits or foreign content require the user's reconciliation, never force overwrite. Project-local and WorkBuddy-imported skills are not inspected or updated by these commands; do not assume which copy a host will load. |
| Unavailable service (`retryable=true`) | Retry within a small bounded limit; if still unavailable, report the blocker and preserve the case. |

`--timeout SEC` controls authorization and network calls, not model streaming/retry policy. There is no dry-run preview, and no import, trace, archive, explain or observe add command.
