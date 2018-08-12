module.exports = {
  base: '/',
  title: "Apicase",
  serviceWorker: true,
  themeConfig: {
    sidebar: [
      {
        title: "Apicase",
        collapsable: false,
        children: ["/", '/installation', "/quick-start"]
      },
      {
        title: "Anatomy",
        collapsable: false,
        children: [
          "/anatomy/requests", 
          "/anatomy/services", 
          "/anatomy/spawner", 
          '/anatomy/adapters'
        ]
      },
      {
        title: 'Migration info',
        children: [
          ['/migration-info/014-015', '0.14 -> 0.15'],
          ['/migration-info/013-014', '0.13 -> 0.14']
        ]
      },
      {
        title: 'Deprecated APIs',
        children: [
          '/deprecated/queues',
          '/deprecated/requests-plus'
        ]
      },
      {
        title: 'Adapters',
        children: [
          '/adapters/fetch',
          '/adapters/xmlhttprequest'
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': './assets'
      }
    }
  }
}
