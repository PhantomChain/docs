//const buildSection = require('./utils/buildSidebar')

const path = require("path");
const fs = require("fs");
const DOCSPATH = "docs";


const config = {
  title: "Phantom Documentation",
  description: "The central knowledge hub for all things Phantom",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://alpha.phantom.org/wp-content/uploads/2018/08/logo.png"
      }
    ]
  ],
  themeConfig: {
    logo: "https://alpha.phantom.org/wp-content/uploads/2018/08/logo.png",
    repo: "PhantomChain/docs",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'P2P API',
      link: '/api/p2p/'
    }, {
      text: 'Public API 1.0',
      link: '/api/public/v1/'
    }, {
      text: 'Public API 2.0',
      link: '/api/public/v2/'
    }],
    sidebar: {
      "/api/sdk/": require("./sidebars/api/sdk"),
      "/api/json-rpc/": require("./sidebars/api/json-rpc"),
      "/api/public/": require("./sidebars/api/public"),
      "/api/": require("./sidebars/api"),
      "/faq/": require("./sidebars/faq"),
      "/introduction/": require("./sidebars/introduction"),
      "/cookbook/": require('./sidebars/cookbook'),
      "/guidebook/": require('./sidebars/guidebook'),
      "/": require('./sidebars/main'),
    },
    algolia: {
      apiKey: '93e1d829aa41bf2114b9de44dadb4998',
      indexName: 'ark'
    }
  }
};

module.exports = config