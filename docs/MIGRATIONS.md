# Marketplace migrations

## Environmental Data: independent distribution

Environmental Data's authoritative source is [HiQ-AI/environmental-data](https://github.com/HiQ-AI/environmental-data). It is intentionally absent from this marketplace's current catalog so users see it as an independent product, not a duplicate listing alongside Editor or the expert plugins. The other products remain here.

The independent marketplace uses native relative sources within its own repository. Although a native marketplace can reference another repository, adding that reference here would still create a shared-marketplace product listing. No such duplicate listing is added. The current Cortex catalog/provisioner also resolves plugin paths within its configured repository; it does not define a per-entry remote-source field, so this migration does not invent one.

### Existing installations

The stable plugin ID is still `querying-lca-datasets-expert`; the business CLI is still `querying-lca-datasets`0.5.1 with unchanged authentication and release pins. The marketplace namespace changes from `hiq-plugins` to `environmental-data` and requires an explicit host-plugin migration:

1. Inspect the host's installed list and disable the old `querying-lca-datasets-expert@hiq-plugins` entry to avoid two active copies.
2. Add the independent marketplace and install its plugin:

```text
/plugin marketplace add HiQ-AI/environmental-data
```

```text
/plugin install querying-lca-datasets-expert@environmental-data
```

3. Confirm the independent plugin is available, then uninstall only the old host-plugin entry through the host's own interface.
4. Preserve the separately installed CLI, credentials, input files and user data. Reload the host session if required for plugin discovery.

A catalog refresh does not move an installed plugin between marketplace namespaces. Existing entries are not silently removed or migrated by this repository. Old revisions are historical evidence, not a second maintained product source. See the independent [installation guide](https://github.com/HiQ-AI/environmental-data/blob/main/docs/INSTALLATION.md).

### Verified boundary

With Claude Code2.1.317 in an isolated HOME/config, the old shared entry was installed and disabled, the independent public marketplace was added and its plugin0.5.3 installed, then the old entry was uninstalled. The final installed list contained only the enabled independent entry. The actual cache contained the manifest, main operating skill and three agent roles. No business CLI provisioning, login, model call or data request was performed.

This is native packaging/migration evidence, not Codex compatibility or a production Desktop change. This publication does not switch Desktop's existing source, release Desktop or alter its installed plugin/account state.
