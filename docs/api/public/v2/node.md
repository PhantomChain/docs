---
title: Public Node API
---

# Public Node API

## Retrieve the configuration

### Endpoint

```
GET /api/node/configuration
```

### Response

```json
{
    "data": {
        "nethash": "578e820911f24e039733b45e4882b73e301f813a0d2c31330dafda84534ffa23",
        "token": "DXPH",
        "symbol": "Dⓟ",
        "explorer": "https://dexplorer.phantom.org",
        "version": 30,
        "ports": {
          "@phantomchain/core-p2p": 4000,
          "@phantomchain/core-api": 4003,
          "@phantomchain/core-graphql": 4005,
          "@phantomchain/core-json-rpc": 8080
        },
        "feeStatistics": [
          {
            "type": 0,
            "fees": {
              "minFee": 268421,
              "maxFee": 597781,
              "avgFee": 404591
            }
          }
        ],
        "constants": {
            "height": 75600,
            "reward": 200000000,
            "activeDelegates": 51,
            "blocktime": 8,
            "block": {
                "version": 0,
                "maxTransactions": 50,
                "maxPayload": 2097152
            },
            "epoch": "2017-03-21T13:00:00.000Z",
            "fees": {
                "send": 10000000,
                "vote": 100000000,
                "secondsignature": 500000000,
                "delegate": 2500000000,
                "multisignature": 500000000
            }
        }
    }
}
```

## Retrieve the status

### Endpoint

```
GET /api/node/status
```

### Response

```json
{
    "data": {
        "synced": false,
        "now": 3034451,
        "blocksCount": -36
    }
}
```

## Retrieve the syncing status

### Endpoint

```
GET /api/node/syncing
```

### Response

```json
{
    "data": {
        "syncing": true,
        "blocks": -36,
        "height": 3034451,
        "id": "5444078994968869529"
    }
}
```
