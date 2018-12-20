module.exports = [
  ['/', 'Back to Table of Contents'],
  ["/introduction/", "From Blockchain to Phantom"],
  {
    title: "Blockchain",
    collapsable: false,
    children:  [
      ["/introduction/blockchain/", "Intro to Blockchain"],
      "/introduction/blockchain/what-is-blockchain",
      "/introduction/blockchain/how-secure-is-blockchain", 
      "/introduction/blockchain/why-do-blockchains-exist",
      "/introduction/blockchain/when-do-you-need-blockchain",
      "/introduction/blockchain/anonymous-vs-untraceable",
      "/introduction/blockchain/understanding-consensus-models"
    ]
  },
  {
    title: "Phantom",
    collapsable: false,
    children:  [
      ["/introduction/ark/", "Intro to Phantom"],
      "/introduction/ark/understanding-transactions-and-block-propagation",
      "/introduction/ark/what-is-an-ark-address",
      "/introduction/ark/interoperability-and-ark",
      "/introduction/ark/how-does-ark-smartbridge-work",
      "/introduction/ark/what-is-delegated-proof-of-stake"
    ]
  },
];

