---
title: Ark SDK
---

# Ark SDKs
Using Ark SDKs, developers can employ the programming language of their choice to build applications utilizing the Ark blockchain.

The functionality of Ark API is split into two SDKs: Client and Cryptography. 

**Client** SDKs help developers fetch information from the Ark blockchain about its current state: which delegates are currently forging, what transactions are associated with a given wallet, and so on. 

**Cryptography** SDKs, by contrast, assist developers in working with transactions: signing, serializing, deserializing, etc.

If your application doesn't involve sending transactions, you can most likely build your application using the Client SDK alone. Otherwise, applications looking to leverage the full spectrum of Ark APIs should make use of both Client and Cryptography SDKs.

Usage guides are included for each supported language, and examples of how to use these libraries can be found in the [Cookbook](/cookbook/).
