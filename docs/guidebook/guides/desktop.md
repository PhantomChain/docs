---
title: "Desktop Wallet"
---

# Desktop Wallet

[![Build Status](https://travis-ci.org/Phantomchain/phantom-desktop.svg?branch=master)](https://travis-ci.org/Phantomchain/phantom-desktop)
[![Github Latest Release](https://img.shields.io/github/release/Phantomchain/phantom-desktop.svg)](https://github.com/Phantomchain/phantom-desktop/releases/latest)
[![Github Downloads](https://img.shields.io/github/downloads/Phantomchain/phantom-desktop/latest/total.svg?logo=github)](https://github.com/Phantomchain/phantom-desktop/releases/latest)

# Pinned: Critical bugs only!
Since we are working on the next-gen version of the wallet, we won't be reviewing pull requests with new features and bugs (only critical bugs will be reviewed and merged). Our intention is deploying the first beta of the v2 desktop wallet in a few weeks time so we need to be focused on it exclusively.

Please do not submit Pull-Requests (PRs) unless they solve an urgent problem.

## Pinned: Help us with translations
Collaborate with other translators on [our OneSky project](http://osjc1wl.oneskyapp.com/collaboration/project?id=95031) and help us get wallet translated in other languages.

Please do not submit Pull-Requests (PRs) for translations, but use the link above!

## Download
[Latest Release](https://github.com/PhantomCore/desktop-wallet/releases)

## Installing via Package Managers

#### AUR
For distros derived from Arch Linux the package is available in AUR, just run:

```
yaourt -Sy desktop-wallet
```

#### Homebrew
For Mac users the package is available in [Homebrew](https://brew.sh/):

```
brew update
brew cask install phantomclient
```

## Features
* Available on ***Windows***, ***Linux*** (Ubuntu/Debian) and ***MacOSX*** (signed).
* No need to download PHANTOM blockchain, just sync to the network: launch and use within seconds.
* View any account from its address (transactions, delegate status and votes).
* Label any account and add your own contacts.
* Real-time currency value (updated every 5 min) in USD, EUR, BTC, HKD, JPY, CNY, AUD, GBP, Rubble, ...
* Autoconnect to a healthy PHANTOM network peer. If the peer is not good anymore, it will automatically find a new one.
* Send XPH from / to any account.
* Easily switch to a different network, or private chains.
* Customized backgrounds and themes for better user experience.
* Choose between dark or light mode.
* Isolated processes on Windows and MacOSX to prevent from data sniffing or injection.
* Organise your accounts with virtual folders (for instance savings, personnal etc...) so you don't pay any transfer fee (stored locally).
* Change your delegate vote.
* When new version is available, message is shown in the right upper part.
* Easy to update - download latest version, start installation program and it will automatically remove previous version and install new one.
* Second signature supported.
* (soon) Deposit or withdraw XPH using altcoins or USD (via exchange) - no registration needed.
* (soon) Multisignature accounts.
* **SAVE YOUR PASSPHRASE(S) - if you lose it, you lose access to that particular PHANTOM address(es). There is no forgot my password option with blockchains and no one can help you retrieve it!**


## Screenshots
![dashboard](https://i.imgur.com/AVdyM16.jpg)
![account](https://i.imgur.com/DD8fx1O.jpg)

## Build

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Optionally switch to node 6.9.2, because this is currently developed with this version:
```
sudo npm install -g n
sudo n 6.9.2
```

Install from source:
```bash
# Clone this repository
git clone https://github.com/PhantomCore/desktop-wallet
# Go into the repository
cd desktop-wallet
# Install dependencies
npm install
```

* In some cases, [node-hid](https://github.com/node-hid/node-hid) doesn't provide pre-built binaries, so is necessary to install the [node-hid dependencies](https://github.com/node-hid/node-hid#compiling-from-source) to build them from source before running `npm install`.

Then start:
```bash
npm start
```

### Requirements to build from OS X

```
brew tap Homebrew/bundle
brew bundle
```

## Contributing

* If you find any bugs, submit an [issue](../../issues) or open [pull-request](../../pulls), helping us catch and fix them.
* Engage with other users and developers on [PHANTOM Slack](https://phantom.org/slack/).

## Authors
- FX Thoorens <fx@ark.io>
- Guillaume Verbal <doweig@ark.io>
- Lúcio Rubens <lucio@ark.io>
- Juan Martín <juan@ark.io>

## License

The Ark Desktop Wallet is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

The PHANTOM Desktop Wallet is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
