---
title: "Error Tracker - Sentry"
---

# Error Tracker - Sentry

::: tip
You can find the source code of this package at [packages/core-error-tracker-sentry](https://github.com/PhantomChain/core/tree/develop/packages/core-error-tracker-sentry).
:::

## Installation

```bash
yarn add @phantomchain/core-error-tracker-sentry
```

## Configuration

> Check https://docs.sentry.io/quickstart?platform=node to find your DSN and more information about available options.

```js
module.exports = {
  dsn: process.env.PHANTOM_ERROR_TRACKER_SENTRY_DSN,
  debug: true,
  attachStacktrace: true,
  environment: process.env.PHANTOM_NETWORK_NAME,
}
```
