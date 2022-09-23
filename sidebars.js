module.exports = {
  docs: [
    "welcome",
    {
      type: "category",
      label: "About Mina",
      items: [
        "about-mina/index",
        "about-mina/what-are-zero-knowledge-proofs",
        "about-mina/protocol-architecture",
        "about-mina/consensus",
        "about-mina/faq",
        {
          type: "link",
          label: "Whitepaper", // The link label
          href: "https://minaprotocol.com/wp-content/uploads/economicsWhitepaper.pdf", // The external URL
        },
      ],
    },
    {
      type: "category",
      label: "Using Mina",
      items: ["using-mina/install-a-wallet"],
    },
    {
      type: "category",
      label: "zkApp Developers",
      items: [
        "zkapps/index",
        "zkapps/how-zkapps-work",
        "zkapps/how-to-write-a-zkapp",
        "zkapps/how-to-test-a-zkapp",
        "zkapps/how-to-deploy-a-zkapp",
        "zkapps/how-to-write-a-zkapp-ui",
        "zkapps/advanced-snarkyjs",
        {
          type: "category",
          label: "Tutorials",
          items: [
            "zkapps/tutorials/anonymous-message-board",
          ],
        },
        "zkapps/zkapps-for-ethereum-developers",
        "zkapps/snarkyjs-reference",
      ],
    },
    {
      type: "category",
      label: "Node Operators",
      items: [
        "node-operators/getting-started",
        "node-operators/archive-node",
        "node-operators/archive-redundancy",
        "node-operators/foundation-delegation-program",
        "node-operators/delegation-tiebreak",
        "node-operators/bp-sidecar",
        "node-operators/uptime-tracking-system",
        "node-operators/client-sdk",
        "node-operators/querying-data",
        "node-operators/connecting-to-devnet",
        "node-operators/hardforks",
        "node-operators/hot-cold-block-production",
        "node-operators/ledger-hardware-wallet",
        "node-operators/rosetta",
        "node-operators/proof-of-stake",
        "node-operators/snark-workers",
        "node-operators/scan-state",
        "node-operators/time-locked-accounts",
        "node-operators/block-producers",
        "node-operators/whats-in-a-block",
        "node-operators/lifecycle-of-a-payment",
        "node-operators/seed-peers",
        "node-operators/staking-service-guidelines",
        "node-operators/troubleshooting",
        "node-operators/faq",
        "node-operators/generating-a-keypair",
        "node-operators/connecting-to-the-network",
        "node-operators/sending-a-payment",
        "node-operators/staking-and-snarking",
        "node-operators/mina-cli-reference",
      ],
    },
    {
      type: "category",
      label: "Node Developers",
      items: [
        "node-developers/index",
        "node-developers/codebase-overview",
        "node-developers/repository-structure",
        "node-developers/bip44",
        "node-developers/code-review-guidelines",
        "node-developers/style-guide",
        "node-developers/sandbox-node",
        "node-developers/graphql-api",
        "node-developers/client-sdk",
        "node-developers/contributing",
        "node-developers/logging",
      ],
    },
    {
      type: "category",
      label: "Exchange Operators",
      items: [
        "exchange-operators/faq",
      ],
    },
    {
      type: "category",
      label: "Participate",
      items: [
        "participate/online-communities",
        "participate/grants-and-programs",
        "participate/careers",
        "participate/github",
        "participate/bugs-and-feature-requests",
      ],
    },
    "glossary",
  ],
};
