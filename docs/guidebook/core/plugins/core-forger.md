---
title: "Forger"
---

# Forger

::: tip
You can find the source code of this package at [packages/core-forger](https://github.com/ArkEcosystem/core/tree/develop/packages/core-forger).
:::

## Installation

```bash
yarn add @arkecosystem/core-forger
```

## Alias 
`forger`

## Implementation 
[core-forger](https://github.com/ArkEcosystem/core/tree/develop/packages/core-forger)

## Notable Dependencies

- [axios](https://github.com/axios/axios)

## Summary 

`core-forger` offers a top-level wrapper around the forging process. While not directly responsible for the block creation logic (that can be found in the Delegate model), `core-forger` coordinates the environment in which forging occurs and updates other Ark Core packages on its own forging status.

## Usage

The `core-forger` package is enabled by default in full nodes and forging nodes, and disabled by default on relay nodes. To start your forging node, either use core-commander or run the following command within your node's `packages/core` directory:

```bash
yarn full:mainnet
```

Swap out the node type and network as necessary by using the scripts in `core`'s [package.json](https://github.com/ArkEcosystem/core/blob/develop/packages/core/package.json) file.

## Forging and the Network

`core-forger` needs to have a host to connect to. As the forger holds no information about the blockchain state, it must make REST calls to an Ark Core node's P2P API to determine when to forge. 

The `core-forger` package generalizes its peer connection in the [client](https://github.com/ArkEcosystem/core/blob/develop/packages/core-forger/lib/client.js) class, which handles communication between the forging process and the rest of the node. The client establishes peers based on the `hosts` config.

By default, your `hosts` config includes a link to the default P2P API port. This assumes that you are running a full node, or a node with both relay and forging capabilities.

If you are running a forging node without relay capacities, you will not have an internal P2P API available to you. In this case, you must connect to an Ark Core node with a P2P interface. 

## Behind the Scenes

`core-forger` determines what forging delegate wallets it should use, calculates forging order based on network constants, grabs unconfirmed transactions from the transaction pool, passes transactions to the delegate to forge at the appropriate slot.

The top-level `core-forger` index file creates a ForgerManager before adding the delegate wallets specified in plugin options. Typically, these values are passed into the node at runtime using the `—bip38` and `—password` runtime flags.

After all delegates have been loaded into the manager, their passwords are deleted from memory so they cannot be reused by other plugins or processes.

From there, `core-forger` enters the monitoring process, which initiates a forging attempt whenever a saved delegate is in line to forge. Segments of the forging functions are included here:
```js
async __forgeNewBlock(delegate, round) {
    const transactions = await this.__getTransactionsForForging()

    const blockOptions = {}
    blockOptions.previousBlock = round.lastBlock
    blockOptions.timestamp = round.timestamp
    blockOptions.reward = round.reward

    const block = await delegate.forge(transactions, blockOptions)

    const username = this.usernames[delegate.publicKey]
    logger.info(
      `Forged new block ${block.data.id} by delegate ${username} (${
        delegate.publicKey
      }) :trident:`,
    )

    await this.client.broadcast(block.toJson())

    this.client.emitEvent('block.forged', block.data)
    transactions.forEach(transaction =>
      this.client.emitEvent('transaction.forged', transaction.data),
    )
  }
```
The `__getTransactionsForForging` method fetches transactions from the `transactions/forging` endpoint of the P2P API. This endpoint polls the Blockchain API, which returns a list of forging transactions from the Transaction Pool. 

This transaction list is returned to `__forgeNewBlock`, which combines the transaction data with information from the current round to create a new block using the `delegate.forge` method. 

From there, the newly forged block is converted to a JSON representation and propagated throughout the network via the client's `broadcast` method. This method sends a POST connection to the P2P API's `/blocks` endpoint, which queues the new block and broadcasts it to peers for validation:
```js
exports.store = {
  /**
    * @param  {Hapi.Request} request
    * @param  {Hapi.Toolkit} h
    * @return {Hapi.Response}
    */
  handler: (request, h) => {
    request.payload.block.ip = requestIp.getClientIp(request)

    app.resolvePlugin('blockchain').queueBlock(request.payload.block)

    return h.response(null).code(204)
  },
  options: {
    validate: schema.store,
  },
}
```
## Default Settings
```js
{
  hosts: [`http://127.0.0.1:${process.env.ARK_P2P_PORT || 4002}`],
}
```
