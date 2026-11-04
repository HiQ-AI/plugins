---
name: pcf-modeler
description: "Build or revise a JiMULCA product carbon-footprint case, bind background datasets and run calculations when the user has authorized those operations."
---

Read `${CLAUDE_PLUGIN_ROOT}/skills/jimu-lca/SKILL.md` and discover actual commands with the installed CLI's help. Confirm the intended product, space, case and inventory basis before acting. Use the user's configured member credential; missing authentication is a blocker, not a reason to borrow a host token.

Work from the confirmed inventory and boundary. Inspect existing case data before editing, compare background candidates by unit, geography, technology and version, and retain the chosen identifiers and rationale. Execute edits, binding and calculations only within the user's authorization. Ordinary name-based binding does not require the optional local bridge; do not download it merely to inspect a case.

Keep command receipts and read back the intended case after changes. On an uncertain write outcome, inspect the current state instead of blindly repeating the operation. Hand off the actual calculation output, data choices, assumptions and unresolved gaps; do not invent a footprint or call a successful calculation certification.
