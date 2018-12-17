---
title: "Installation"
---

# Pay

[[toc]]

## Installation

```bash
yarn add @arkecosystem/pay
```

## Example

```js
const ArkPay = require('@arkecosystem/pay')
const gateway = new ArkPay()

gateway
    .recipient('DNjuJEDQkhrJ7cA9FZ2iVXt5anYiM8Jtc9')
    .amount(1)
    .vendorField('Hello World')
    .currency('USD')
    .coin('ARK')
    .network('devnet')

// The "started" event is emitted when Ark Pay loaded all seeds, peers
// and exchange rates to make sure we are requesting the correct amount.
gateway.on('started', data => {
    // Send the session data to your backend, render it to the UI, etc.
})

// The "completed" event is emitted when Ark Pay received the exact amount
// with the correct vendor field within the specified time frame.
gateway.on('completed', data => {
    // Send a confirmation email, redirect the user, etc.
})

// The "aborted" event is emitted when Ark Pay is unable to find any seeds,
// peers or exchange rates for the active network within a reasonable time frame.
gateway.on('aborted', data => {
    // Restart the session, refresh the page or flush the shopping cart, etc.
})

// The "error" event is emitted when Ark Pay encounters any errors like an
// invalid or malformed response to an HTTP request.
gateway.on('error', data => {
    // React to the error, note that errors are not always critical, etc.
})

// The "start" method will initialise the transaction listener.
await gateway.start()
```

## API

### Set the recipient of the transfer.

```js
.recipient('ARMy9u1XvrZ124JzQq3oeJpjmBEnYkyU7D')
```

### Set the total amount of the transfer.

```js
.amount(1)
```

### Set the vendor field of the transfer.

```js
.vendorField('Hello World')
```

### Set the fiat currency of the transfer.

```js
.currency('USD')
```

### Set the crypto currency of the transfer.

```js
.coin('ARK')
```

### Set the network of the transfer.

```js
.network('devnet')
```

### Set the seeds of the network.

```js
.seeds('ark', [{
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}])
```

### Set the peers of the network.

```js
.peers([{
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}, {
    ip: '127.0.0.1',
    port: '4003'
}])
```
