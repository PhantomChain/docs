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
      ["/introduction/phantom/", "Intro to Phantom"],
      "/introduction/phantom/understanding-transactions-and-block-propagation",
      "/introduction/phantom/what-is-an-ark-address",
      "/introduction/phantom/interoperability-and-ark",
      "/introduction/phantom/how-does-ark-smartbridge-work",
      "/introduction/phantom/what-is-delegated-proof-of-stake"
    ]
  },
];

