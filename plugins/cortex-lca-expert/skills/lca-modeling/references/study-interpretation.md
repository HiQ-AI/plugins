# Research drafts and interpretation of native results

Read this when turning incomplete records into a study, explaining a zero/negative result, checking effective characterization, or comparing scenarios. These are professional reasoning steps for the host, using native evidence rather than automated acceptance scores.

## From materials to a research draft

Determine the intended use and reporting basis before normalizing data. A factory electricity bill may cover several lines; production records may report a batch while the requested functional unit is one delivered product. Reconcile the dates, products and activities that actually belong to the stated boundary. Retain the source page/row, measured quantity and unit, conversion, attribution/allocation basis and unresolved evidence in project assumptions/dataSources and native documentation. This can be ordinary notes or a table, without a prescribed material template.

For example, a marked synthetic record of 72 kg of output and 240 equivalent pieces supports 0.3 kg of that reference product per piece. It does not establish the usable output, functional equivalence, site energy share or coproduct allocation by itself. Ask only about ambiguities that change the calculation, such as whether the output includes rejects. Preserve the user's chosen basis and identify any proxy.

After choosing the database workspace/name, save the study with `project init/update`; it may remain incomplete and have no model binding. `project check --directory PROJECT` can observe recorded study gaps and material changes before an App/service/model exists. A missing source is reported in `unavailableMaterials`, rather than preventing the other observations; restore it or update its path before a new calculation. Initializing/updating/running still requires the recorded source files. When `study.model` exists, native inspection requires the correct owned database service; a stopped or different database is not an empty model.

Recorded missing fields are prompts for the study's intended use, not a universal pass/fail checklist. Do not make provisional decisions look confirmed, invent a library license, or equate complete fields with ISO conformity. Research files keep decisions and references; openLCA keeps the editable model.

## Confirm the actual calculation basis

New `project run` records retain `result.demand`, together with the exact input and native model ZIP. Demand is the engine's actual reference-product requirement, not the activity level of every background process. Read its `techFlow.provider` and `techFlow.flow`, including the flow reference unit. Compare the saved `input.setup` amount/unit/flow-property with the source conversion and the native reference exchange. A report's “per piece” label does not change a batch calculation.

For a live result:

```sh
cortex-lca-expert result RESULT-ID demand --project PROJECT
```

The reported demand can use the reference unit after native conversion. Compare compatible quantities; a numerical difference caused by kg/g is not necessarily a wrong functional unit. Use the material evidence and native unit factors to explain it.

## Trace a metric to its effective factors and elementary flows

Use saved `result.impacts`, `flows`, `contributions` and `characterization`. Each characterization entry identifies an impact-category UUID and retains the native effective `factors` and signed `flowImpacts`. While the result is alive, the equivalent commands are:

```sh
cortex-lca-expert result RESULT-ID factors CATEGORY-ID --project PROJECT
cortex-lca-expert result RESULT-ID flow-impacts CATEGORY-ID --project PROJECT
```

Compare an environmental row using **flow UUID, isInput and location together**. A name/CAS match or UUID alone can combine distinct rows. Keep the native direction, units and signs. Category impacts/flow impacts use the category reference unit; factor `amount` is an effective coefficient per native environmental-flow reference quantity, even when its `enviFlow.flow` descriptor carries the inventory unit. Do not relabel flow impacts as kg of inventory or treat a factor as an impact total.

`study/project check` shows stored factors with their qualifiers; result factors show what this calculation actually used. A stored factor with the same UUID may have a location qualifier ignored by a nonregional calculation, a formula, another unit basis or an explicit zero. The result arrays keep zero rows. An effective zero cannot by itself distinguish “no stored factor”, “explicit zero” and “not applicable under this setup”; investigate stored records and `input.setup.withRegionalization` before explaining it. Lack of a factor can be legitimate for the selected indicator.

In openLCA 2.6.2, the display view flips input rows for total inventory and effective factors; native flow impacts already represent the signed contribution. Do not apply another input sign flip, discard rows based on category direction, or take absolute values to force positive impacts. Use the original native flow-impact result as evidence. Negative values can come from modeled uptake, avoided products, system expansion, negative exchanges or signed factors; inspect the graph and conventions before accepting or correcting them.

A zero total may reflect offsetting positive and negative contributions, zero demand, uncharacterized flows or a genuine zero for this indicator. Inspect actual demand, inventory, effective factors and signed flow impacts. Do not silently call it “no emissions” or assign missing factors. Sum contributions only within the same category and reference unit, allowing numerical tolerance justified by the calculation; do not add unlike impact indicators.

## Compare scenarios and explain robustness

Before presenting a percentage change, align functional/reference quantities, boundary, method/category UUID and units, allocation and background choices. Retain each run's own study/input/model snapshot. If a scenario intentionally changes one of those bases, explain the difference rather than describe it as a pure process improvement. A base value of zero has no defined relative percentage; report the absolute change and its unit.

Change the parameters that represent the actual proposed activity. Retain measured versus assumed values, and recalculate static allocation factors when their underlying quantities/prices change. Compare both total category impacts and major signed contributions to explain why a result changed. Sensitivity to a disputed assumption can be investigated with explicit additional runs; choose ranges from evidence or the user, without inventing an uncertainty distribution.

For Monte Carlo inspect the distributions actually stored on native exchanges, parameters and factors. Use `schema simulation` and `project simulate --directory PROJECT --file FILE` with an agreed iteration count and optional `maxDurationMs`; `project simulations` reads persisted evidence without starting another simulation. Native samples follow the model's distributions; the command does not infer missing distributions, prescribe ranges or supply a reproducible seed. Deterministic inputs can legitimately yield constant samples. Report precisely which uncertainties are represented and which remain unmodeled; native sampling does not establish data representativeness or model completeness.

The native first call already calculates one random iteration, and later calls replace the live result. The CLI saves each sample before requesting the next. Read sample files referenced by `simulations/SIMULATION-ID/simulation.json`; check the actual series status and saved sample count before describing a completed analysis. Failed/stopped series can be delivered as partial evidence, with their last admission and observations, but cannot be silently rerun or combined as an originally completed series. Statistics should use the saved samples, category UUID and native units, stating the count, method and quantile/interval definition. A Monte Carlo interval describes variation under the specified model; it is not automatically a confidence interval for real-world accuracy or a quality grade.

Write a report appropriate to the agreed purpose: the supported findings, material assumptions, representativeness/coverage issues, sensitivity and unresolved limits. Link numerical claims to the exact run and model ZIP. Distinguish foreground attribution from coproduct allocation, method coverage from data quality, and a calculated result from professional certification. Label teaching data and coefficients. Current study definitions and older runs can coexist in a valid project archive; state which runs support the report's conclusions and which are historical. Missing characterization in an older run means it was not saved by that version; do not fabricate it or rewrite the historical receipt.

Write the report for its recipient. `project deliver` copies `report.md` verbatim and exports the project record as `study.json`, together with `runs/RUN-ID/run.json` and `runs/RUN-ID/model.jsonld.zip`. Simulation evidence with saved samples is included under `simulations/SIMULATION-ID/`, retaining status and hashes; distinguish partial series explicitly. Use those relative links for package evidence; the source project's `lca-project.json` is not the delivered filename. Original materials and installed Skills/references are not copied. Identify their source paths, hashes or names as external prerequisites rather than presenting local-only links as package artifacts. External library links require the recipient's corresponding installed library and valid license; an editable foreground ZIP does not bundle commercial background contents. After delivery, check the manifest hashes and that the report's package links resolve inside the actual delivery directory.

## Native semantic references

- [openLCA 2.6.2 native result views](https://github.com/GreenDelta/olca-modules/blob/v2.6.2/olca-core/src/main/java/org/openlca/core/results/LcaResult.java): demand, effective factors, flow impacts, full environmental index including zero rows.
- [Native ResultProvider](https://github.com/GreenDelta/olca-modules/blob/v2.6.2/olca-core/src/main/java/org/openlca/core/results/providers/ResultProvider.java): signed input display and flow-impact calculations.
- [Native ImpactBuilder](https://github.com/GreenDelta/olca-modules/blob/v2.6.2/olca-core/src/main/java/org/openlca/core/matrix/ImpactBuilder.java): category direction and regional/nonregional factor selection.
