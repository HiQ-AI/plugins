# Environmental Data — sources and scope

Environmental Data is a multi-source entry point for environmental process-data discovery and matching. Its current CLI workflow targets LCA background process datasets for materials, energy, transport, treatment and other inventory requirements. It is not a claim to cover every kind of environmental data or every database.

## Published source catalog

The backing service's [public source directory](https://x.hiqlcd.com/api/relic/sources) was read anonymously on **2026-11-04**. The table records the latest version advertised for each source at that time. Earlier versions can also be listed by the service; use the live directory and the CLI's actual help/schema to select an available source/version/system-model coordinate.

| Published source | Source code | Latest advertised version | Advertised system model(s) | Service access flag | LCIA advertised |
| --- | --- | --- | --- | --- | --- |
| HiQLCD | `hiqlcd` | 1.5.0 | `CONSEQUENTIAL`, `CUT_OFF`, `EN_15804` | Commercial | Yes |
| HiQLCD-AL | `hiqlcd-al` | 2.0.0 | `CONSEQUENTIAL`, `CUT_OFF` | Commercial | Yes |
| CALCD | `calcd` | 3.0.0 | `CUT_OFF` | Commercial | Yes |
| China Li-ion Battery Carbon Footprint Database (CESI) | `hiq-cesi` | 1.1.0 | `CUT_OFF` | Commercial | Yes |
| Ecoinvent | `ecoinvent` | 3.12.0 | `APOS`, `CONSEQUENTIAL_LONG`, `CUT_OFF`, `EN_15804` | Commercial | Yes |
| CarbonMinds | `carbonminds` | 2.0.2 | `CUT_OFF` | Commercial | Yes |
| Agri-footprint | `agrifootprint` | 7.0 | `CUT_OFF` | Commercial | No |
| EF | `ef` | 3.1.0 | `DEFAULT` | Free in service catalog | Yes |
| AusLCI | `auslci` | 1.40 | `DEFAULT` | Free in service catalog | Yes |
| BAFU | `bafu` | 2025 | `DEFAULT` | Free in service catalog | Yes |
| BioEnergieDat | `bioenergiedat` | 1.0 | `DEFAULT` | Free in service catalog | Yes |
| ELCD | `elcd` | 3.2 | `DEFAULT` | Free in service catalog | Yes |
| NEEDS | `needs` | 1.0 | `DEFAULT` | Free in service catalog | Yes |
| OzLCI | `ozlci` | 1.0 | `DEFAULT` | Free in service catalog | Yes |
| Recycled Plastics | `recycledplastics` | 1.0 | `DEFAULT` | Free in service catalog | No |
| USDA Crop Data | `usda` | 1.0 | `DEFAULT` | Free in service catalog | Yes |
| USLCI | `uslci` | 1.0 | `DEFAULT` | Free in service catalog | Yes |
| Worldsteel | `worldsteel` | 2020 | `DEFAULT` | Free in service catalog | Yes |

This is **published catalog metadata**, not a per-account access inventory or a completed lookup test against every source. Directory visibility does not grant numerical-data access. Commercial values remain subject to the user's source/version/model entitlements. A service “free” flag does not waive the original database's license or permit unrestricted redistribution.

“LCIA advertised” means the service reports LCIA coverage for that source version. It does not establish coverage of every process, method or indicator. In particular, the catalog does not advertise LCIA for the listed Agri-footprint and Recycled Plastics versions; do not manufacture missing results or represent a process record as a retrieved impact factor.

## What matching must preserve

Retain the actual source code, version, system model, dataset reference, reference product/unit, geography and any available time/technology evidence. Explain proxies and unresolved requirements. Database release year is not the underlying data's reference year, and a matching name alone does not establish applicability.

Search, identity verification, numerical lookup and professional suitability are separate steps. A restricted value is not an empty database. Do not switch to another source or model silently when a requested source is unavailable to the account.

## Additional databases

The product name allows a broader environmental-data entry point; it does not make an unconnected database available. Only claim a source/version/model that the live service advertises and the current command actually supports. Databases absent from that directory are not claimed as integrated here. Similar names are not aliases unless the service explicitly identifies them as such.

This documentation update changes branding, not the service catalog, database integrations, CLI protocol, authentication, downloads or data rights. The source directory may evolve independently of this plugin. Discover current capabilities rather than treating this dated snapshot as a permanent allowlist.
