---
title: "Snapshots"
---

# Snapshots

## Installation

```bash
yarn add @arkecosystem/core-snapshots
```

## Alias

`snapshots`

`snapshots-cli`

## Notable Dependencies

- [msgpack](https://www.notion.so/ceibaweb/Snapshots-6c04269e26bf48e0b16af21e0b37e52c)

## Summary

The `core-snapshots` and `core-snapshots-cli` packages facilitate the process of creating, verifying, and applying blockchain backups. This suite of packages can be used to create regular database backups in a serialization format understood by all Ark Core nodes.

In order to ensure that snapshots are usable across the network, it is often helpful to establish a common standard of data serialization. If all nodes agree on a single ruleset governing how blockchain data maps into a database representation, it becomes much easier to compare, validate, and verify snapshots created by different nodes. `core-snapshots` offers three such standards, also known as codecs, covering a wide range of use cases:

- The `lite` codec utilizes a MessagePack encoding format with Ark-specific key-value pairs. This encoding format is faster than the `ark` format, but results in larger backup file sizes, as keys are stored alongside their respective values
- The `ark` codec uses Ark's serialize and deserialize standards in creating the backup. As the Ark serialization protocol does not include key data, this codec results in smaller database backup sizes. However, this density comes at the expense of performance, as Ark serialization (currently) cannot match MessagePack's encoding and decoding speed.
- The `msgpack` codec uses MessagePack without any Ark-specific standards. As this codec has no specific knowledge of Ark serialization, this option is both the fastest and the most inefficient in terms of snapshot file size.

With all options, the tradeoff to keep in mind is performance vs filesystem impact. If you have a external storage solution for backups and limited computational resources, using `msgpack` will ensure maximum performance across all potential use cases. Alternatively, if your node setup is robust and backup creation speed is not a relevant factor, the `ark` codec  might be the right choice. 

If you're unsure of which to choose, use the `lite` codec. Generally speaking, it offers the best tradeoff between performance and impact.

## Usage

The `core-snapshots-cli` is a command-line interface designed to help developers automate their backup creation workflow. While the commands themselves can be found in `core-snapshots-cli` [package.json](https://github.com/ArkEcosystem/core/blob/develop/packages/core-snapshots-cli/package.json) file, the source code behind these commands can be found in the `bin/snapshot` [file](https://github.com/ArkEcosystem/core/blob/develop/packages/core-snapshots-cli/bin/snapshot).

The following options are available to all commands:

- `-d` / `—data`: specifies which data directory should be used as a destination for snapshots. default is `~/.ark`
- `-c` / `—config`: specifies where the network configuration file can be found. default is `~/.ark/config`
- `-t` / `—token`: specifies which token data should be exported. default is `ark`
- `-n` / `—network`: specifies which network should be exported
- `—skip-compression`: specifies whether the specified action should compress its output using gzip or not. default is `false`
- `—trace`: specifies whether snapshot details should be logged to console for error tracing. default is `false`

## Create A Snapshot

Calling the `create` CLI command prompts your node to create a backup and save it in the data directory specified at runtime. The folder name will follow the format `{data}/snapshots/{network}/{startblock}-{endblock}` and contains `transactions.lite`, `blocks.lite` and `meta.json`.

## **Creating a fresh new snapshot**

To create a snapshot, navigate to the `core-snapshots-cli` package and run the following command:
```bash
yarn create:devnet
```
The command will generate snapshot files in your configured folder. By default this folder will be in `~./ark/snapshots/NETWORK_NAME`. Files names follow the pattern: `{TABLE}.{CODEC}` For example, running `yarn create:devnet` will create the following files in the folder `~./ark/snapshots/devnet/0-331985/`:

- blocks.lite
- transactions.lite

The codec used can be specified using the `—codec` flag, for example:
```bash
yarn create:devnet --codec ark
```
The folder `0-331985` indicates that the snapshot includes data between block 0 and block 331985.

Using the optional `—start` and `—end` flags will specify a lower and uppers bounds for the snapshot, allowing you to customize your backups to your specific needs.

The following options are available when using the `create` command:

- `-s` / `—start`: specifies a starting network height from which to create the snapshot
- `-e` / `—end`: specifies an ending network height for the snapshot
- `—codec {STRING}`: use the string input to specify a codec
- `-b` / `—blocks`: used to specify a snapshot to append to (see next section

## **Append Data to an Existing Snapshot**

Appending data to existing snapshots can help manage snapshot size and improve snapshot import speeds. The command is the same as creating a snapshot with additional parameter for `-b` or `--blocks`. This flag allows you to specify he existing snapshot blocks/folder you want to append to. 

To use the `--blocks` flag, provide the `0-331985` blocks number or folder name as an argument: 
```bash
yarn create:devnet --blocks 0-331985
```
Note that all appends create new backup folders and leave the original snapshot intact. To preserve hard disk space, remove old backups if you are sure your appended snapshot is valid.

## **Importing a snapshot**

The `import` command allows you to restore your Ark Core node with data from a backup you previously created.

Importing new snapshots **should not be done while your node is still running**, as running a blockchain node without blockchain data can lead to unexpected behavior.

Snapshot filename must be specified:
```bash
yarn import:devnet -b 0-331985
```
If you want to import from block 1, e.g. empty database first, you should run the yarn truncate:NETWORK_NAME command.
```bash
yarn truncate:devnet
```
Alternatively, add the `—truncate` flag to the `import` command to truncate and import with one command:
```bash
yarn import:devnet -b 0-331985 --truncate
```
By default, the block height is set to last finished round (blocks are deleted at the end). If you have more snapshots files following each other, then you can disable this behavior with the `--skip-revert-round` flag. If this flag is present, block height will not be reverted at the end of import to last completed round.

If you want to do additional `crypto.verify` check for each block and transaction a flag `--signature-verify` can be added to the import command
```bash
yarn import:devnet --blocks 0-331985 --truncate --signature-verify
```
Please note that this will increase the import time drastically.

The following options can be added to the `import` command at runtime:

- `-b` / `—blocks`: specify a snapshot to import from
- `—codec {STRING}`
- `—truncate`: specify whether the database should be cleared before starting import
- `—skip-restart-round`: specify whether your node should revert to latest round after DB import. default is false
- `—signature-verify`: specify whether signatures should be verified during import (see below). default is false

## **Verify Existing Snapshot**

Verifying a snapshot with the `verify` command involves running checks on a snapshot to ensure all signatures are cryptographically valid and that block hashes follow each other in a logical progression to create a valid blockchain.

Please note that the `verify` command does not interact with the database in any way. It is therefore safe, and a good idea, to verify all snapshots prior to importing them into your Ark Core node.
```bash
yarn verify:devnet --blocks 0-331985
```
You can also just verify the chaining process and skip signature verification with `--skip-sign-verify` option.
```bash
yarn verify:devnet --blocks 0-331985 --skip-sign-verify
```
Note that database verification is run by default whenever a node boots up. Although this procedure ensures network consistency, importing an invalid snapshot will increase the amount of time it takes your node to sync with the network. Trust, but verify — even with your own snapshots. 

## **Rollback Your Chain**

The `rollback` command can be used to roll your blockchain database back to a specific height. This can be useful to manually alter your blockchain structure in case the rollback features included in Ark Core are not specific enough for your use case. 

The following command will rollback the chain to block height of 350000:
```bash
yarn rollback:devnet -b 350000
```
If the `-b` or `--block-height` argument is not set, the command will rollback the chain to the last completed round.

Rollback command also makes a backup of forged transactions, ensuring that no local history is accidentally deleted in a rollback. Transactions are stored next to the snapshot files (in `./ark/snapshots/NETWORK_NAME`). File is named `rollbackTransactionBackup.startBlockHeight.endBlockHeight.json`.

For example: `rollbackTransactionBackup.53001.54978.json` contains transactions from block 53001 to block 54978.

## Implementation

Behind the scenes, `core-snapshots` uses NodeJS streams to process export and import commands. The export and import pipelines are modified based on various runtime options, such as whether the output should be gzipped or not. Here is a condensed version of the business logic behind the `export` command:
```js
exportTable: async (table, options) => {
    const snapFileName = utils.getPath(
      table,
      options.meta.folder,
      options.codec,
    )
    const codec = codecs.get(options.codec)
    const gzip = zlib.createGzip()
    await fs.ensureFile(snapFileName)

    try {
      const snapshotWriteStream = fs.createWriteStream(
        snapFileName,
        options.blocks ? { flags: 'a' } : {},
      )
      const encodeStream = msgpack.createEncodeStream(
        codec ? { codec: codec[table] } : {},
      )
      const qs = new QueryStream(options.queries[table])

      const data = await options.database.db.stream(qs, s => {
        if (options.meta.skipCompression) {
          return s.pipe(encodeStream).pipe(snapshotWriteStream)
        }

        return s
          .pipe(encodeStream)
          .pipe(gzip)
          .pipe(snapshotWriteStream)
      })
      logger.info(
        `Snapshot: ${table} done. ==> Total rows processed: ${
          data.processed
        }, duration: ${data.duration} ms`,
      )

      return {
        count: utils.calcRecordCount(table, data.processed, options.blocks),
        startHeight: utils.calcStartHeight(
          table,
          options.meta.startHeight,
          options.blocks,
        ),
        endHeight: options.meta.endHeight,
      }
    } catch (error) {
      app.forceExit('Error while exporting data via query stream', error)
    }
  },
```
You can find more information about streams and pipes in the [NodeJS documentation](https://nodejs.org/api/stream.html).

## **Default Settings**
```js
{
  codec: 'lite',
  chunkSize: 50000,
}
```
