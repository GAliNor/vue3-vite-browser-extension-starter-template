
export default {
    manifest_version: 3,
    name: 'My Browser Extension 22',
    version: '1.0',
    description: 'An extension for both Chrome and Firefox.',
    // icons: {
    //     '16': 'assets/icon.png',
    //     '48': 'assets/icon.png',
    //     '128': 'assets/icon.png',
    // },
    permissions: ['storage', 'activeTab'],
    action: {
        default_popup: 'src/popup/index.html',
        // default_icon: 'assets/icon.png',
    },
    background: {
        service_worker: 'src/background/background.js',
    },
    content_scripts: [
        {
        matches: ['<all_urls>'],
        js: ['src/content/content.js'],
        },
    ],
    host_permissions: ['http://*/*', 'https://*/*'],
}
