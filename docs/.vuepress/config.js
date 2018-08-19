module.exports = {
    title: 'PHANTOM',
    description: 'Scalable, Interoperable, Private Blockchain.',
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://alpha.phantom.org/wp-content/uploads/2018/08/logo.png'
        }]
    ],
    themeConfig: {
        logo: 'https://alpha.phantom.org/wp-content/uploads/2018/08/logo.png',
        repo: 'PhantomCore/docs',
        repoLabel: 'Contribute!',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        docsDir: 'docs',
        lastUpdated: true,
        nav: [{
            text: 'Home',
            link: '/'
        }, {
            text: 'P2P API',
            link: '/developers/api/p2p/'
        }, {
            text: 'Public API 1.0',
            link: '/developers/api/public/v1/'
        }, {
            text: 'Public API 2.0',
            link: '/developers/api/public/v2/'
        }],
        sidebar: {
            '/developers/api/public/v1/': require('./sidebars/developers/api/public/v1.js'),
            '/developers/api/public/v2/': require('./sidebars/developers/api/public/v2.js'),
            '/developers/api/json-rpc/': require('./sidebars/developers/api/json-rpc.js'),
            '/developers/api/webhooks/': require('./sidebars/developers/api/webhooks.js'),
            '/developers/api/p2p/': require('./sidebars/developers/api/p2p.js'),
            '/developers/': require('./sidebars/developers'),
            '/': require('./sidebars/main.js'),
        }
    }
}
