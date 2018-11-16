---
title: "Configuration"
---

# Configuration

In order to operate a node in any PHANTOM network you need to provide configuration to it one way or another.

## Environment Configuration
PHANTOM Core allows you to use an [.env](https://github.com/bevry/envfile) to provide configuration that is environment specific without having to touch the `~/.phantom/config/plugins.js` file. The `.env` file needs to be stored at `~/.phantom/.env`.

**PHANTOM_LOG_FILE**
This variable is used to specify the file `@phantomcore/core-logger-winston` will use to create logfiles. The default is `${process.env.PHANTOM_PATH_DATA}/logs/core/${process.env.PHANTOM_NETWORK_NAME}/%DATE%.log`.

**PHANTOM_DB_STORAGE**
This variable is used to specify the file `@phantomcore/core-database-sequelize` will use for SQLite. The default is `${process.env.PHANTOM_PATH_DATA}/database/${process.env.PHANTOM_NETWORK_NAME}.sqlite`.

**PHANTOM_DB_HOST**
This variable is used to specify the host `@phantomcore/core-database-sequelize` will use for PostgreSQL. The default is `localhost`.

**PHANTOM_DB_USERNAME**
This variable is used to specify the username `@phantomcore/core-database-sequelize` will use for PostgreSQL. The default is `phantom`.

**PHANTOM_DB_PASSWORD**
This variable is used to specify the password `@phantomcore/core-database-sequelize` will use for PostgreSQL. The default is `password`.

**PHANTOM_DB_DATABASE**
This variable is used to specify the database `@phantomcore/core-database-sequelize` will use. The default is `phantom_devnet`.

**PHANTOM_P2P_HOST**
This variable is used to specify the host `@phantomcore/core-p2p` will use. The default is `0.0.0.0`.

**PHANTOM_P2P_PORT**
This variable is used to specify the port `@phantomcore/core-p2p` will use. The default is `4002`.

**PHANTOM_API_HOST**
This variable is used to specify the host `@phantomcore/core-api` will use. The default is `0.0.0.0`.

**PHANTOM_API_PORT**
This variable is used to specify the port `@phantomcore/core-api` will use. The default is `4003`.

**PHANTOM_WEBHOOKS_HOST**
This variable is used to specify the host `@phantomcore/core-webhooks` will use. The default is `0.0.0.0`.

**PHANTOM_WEBHOOKS_PORT**
This variable is used to specify the port `@phantomcore/core-webhooks` will use. The default is `4004`.

**PHANTOM_GRAPHQL_HOST**
This variable is used to specify the host `@phantomcore/core-graphql` will use. The default is `0.0.0.0`.

**PHANTOM_GRAPHQL_PORT**
This variable is used to specify the port `@phantomcore/core-graphql` will use. The default is `4005`.

**PHANTOM_JSONRPC_HOST**
This variable is used to specify the host `@phantomcore/core-json-rpc` will use. The default is `0.0.0.0`.

**PHANTOM_JSONRPC_PORT**
This variable is used to specify the port `@phantomcore/core-json-rpc` will use. The default is `8080`.
