---
title: "Installation"
---

# Installation

[[toc]]

::: danger
All calls should be made from the server where RPC is running at (i.e., `localhost` or `127.0.0.1`). The RPC server should never be publicly accessible. If you wish to access phantom-rpc from a remote address, you can whitelist the address in `~/.phantom/config/plugins.js`. Addresses allow you to use wildcards, eg. `192.168.1.*` or `10.0.*.*`.
:::

If you do want to allow access from all remotes, start phantom-rpc with the `--allow-remote` command-line switch. This can be dangerous.

## Installation

The JSON-RPC is installed by default but disabled. You can find its configuration in `~/.phantom/config/plugins.js`.

```js
module.exports = {
  ...
  '@phantomchain/core-json-rpc': {
    enabled: process.env.PHANTOM_JSON_RPC_ENABLED,
    host: process.env.PHANTOM_JSON_RPC_HOST || '0.0.0.0',
    port: process.env.PHANTOM_JSON_RPC_PORT || 8080,
    allowRemote: false,
    whitelist: ['127.0.0.1', '::ffff:127.0.0.1'],
    database: {
      uri: process.env.PHANTOM_JSON_RPC_DATABASE || `sqlite://${process.env.PHANTOM_PATH_DATA}/database/json-rpc.sqlite`,
      options: {},
    },
  },
  ...
}
```

If you wish to enable the JSON-RPC simply open the `~/.phantom/.env` file and insert `PHANTOM_JSON_RPC_ENABLED=true`. Once you have done that you need to restart your relay and you are all setup.

## Usage

Now that the JSON-RPC is configured head over to the [JSON-RPC API Reference](/api/json-rpc/) to get started with the integration process into your applications.
