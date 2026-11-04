# Reading the report

`review.json` is the machine result. `report CASE --layer machine --type json -f json` renders that layer; `--layer final` applies explicit human decisions. Read the path in the receipt's `data.file`, not an arbitrary older out/ file. Use the running CLI's `schema --output review` when inspecting the structure (list known names with `schema` if it differs).

Present separately:

1. Delegation: stage, audit date, criteria route, fingerprint and versions. Completion of a documentary review is not final verification.
2. Formal findings: issue number/key, classification, severity, reference, comment, product scope and quoted evidence locations. Preserve the report's wording.
3. Needs-review items and information requests: unresolved criteria are not conformity. Ask for the specified missing material or human judgment.
4. Human decisions: attribution/reason and final-layer effects. A dangling decision needs review; it is not silently applied to a new finding.
5. Limitations: report notices, remaining manual fields, coverage and template requirements. Do not turn a suggested opinion into a certificate.

For an explanation, trace the finding's criterion and original cited blocks through the report and authorized local material. Do not invent clauses or evidence. The CLI has no explain command and the host has no authority to replace its formal judgment.

`profile list` describes supported types. Generic supports JSON, Markdown, HTML and information-request Markdown (`--type request`). ICMQ Mod 101 supports DOCX with the user's external approved template; an unconfigured template must be resolved before rendering.
