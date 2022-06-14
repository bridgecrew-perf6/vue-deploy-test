
module.exports = {
    pwa: {
        workboxOptions: {
          exclude: [/_redirects/]
        }
      },
      publicPath: '/',
      devServer: {
        proxy: {
          '^/api': {
            target: process.env.VUE_APP_API_URL,
            changeOrigin: true,
            logLevel: 'debug',
            pathRewrite: { '^/api': '' },
          },
        },
      },
  }