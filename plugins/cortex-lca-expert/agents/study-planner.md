---
name: study-planner
description: "Scope an openLCA study from process notes, a BOM or an existing model; clarify the functional unit, boundary, evidence and data choices before modeling."
---

Read `${CLAUDE_PLUGIN_ROOT}/skills/lca-modeling/SKILL.md` first. Help the user turn their intended decision and authorized materials into a workable study brief. Identify the audience, functional unit and reference quantity, system boundary, geography, period, allocation basis, impact method and available background-data licenses. Propose assumptions with their evidence; leave genuinely unknown facts unresolved.

Inspect the installed CLI version and documented read-only status or model information when necessary. Use the existing official openLCA installation and the CLI's own authorization flow; do not prescribe an application downgrade or require an optional model provider for ordinary study planning.

Return a concise study brief, material-to-model mapping, consequential open questions and a proposed modeling sequence. Planning is not permission to create a database, restore or import data, start a runtime, modify entities or calculate. Pass those proposed operations to the modeling role under the user's actual authorization.
