# Spreadsheet task dependencies

The plugins here expose business capabilities, not a general Office suite. A plugin's operating skill and a general spreadsheet skill are different components.

## When needed

- **Editor:** use spreadsheet tooling to inspect or prepare an authorized UPR workbook. The Editor CLI's preflight/import and backend receipts remain authoritative for business validation; spreadsheet recalculation is not an Editor import or trial calculation.
- **Nora:** ordinary search and page reading do not require Excel. A requested workbook export may require a separate spreadsheet capability.
- **JiMU:** ordinary CLI inventory queries do not require Excel. For workbook inputs or outputs use a separate spreadsheet capability; do not infer that editing a workbook changes a JiMU case.
- **openLCA prerelease:** inventory workbook inspection or preparation can need spreadsheet tooling. An edited workbook is not an imported native model; authorize and verify any subsequent import or model edit separately.
- **EPD incremental prerelease:** a general workbook editor may help inspect or prepare authorized source material. It does not replace the candidate's separately locked Docling parser/runtime, establish that parsing was complete, or authorize review/model costs.

## Host behavior

1. Inspect the capabilities actually available in the current session. Do not assume the name `xlsx` is installed or allowed.
2. If a suitable spreadsheet capability is already loaded, follow its operating instructions and the user's file authorization.
3. Otherwise explain the specific missing operation and let the user enable an appropriate capability using their host's supported interface. Do not invent cross-plugin dependencies or auto-install Office components.
4. Anthropic's [official XLSX skill](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) is a reference for hosts/accounts entitled to use it under its [own license](https://github.com/anthropics/skills/blob/main/skills/xlsx/LICENSE.txt). A public GitHub URL does not waive those terms, install the skill or prove current-session availability. This repository does not redistribute its contents.
5. If no spreadsheet capability is available, state the gap. A user-provided CSV/JSON export may suffice for row-based lookup, but does not preserve all formulas, formatting or workbook features. Do not claim it is equivalent to editing an XLSX file.

Read only the necessary authorized input. Preserve originals unless modification was explicitly requested. Do not upload a full workbook when a service only needs selected query fields. Validate produced artifacts and distinguish local file edits from remote business writes.
