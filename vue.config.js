

const target = 'http://localhost:9000';
module.exports = {
    // pwa: {
    //     workboxOptions: {
    //       exclude: [/_redirects/]
    //     }
    //   },
      devServer: {
        // port: 8082,
        proxy: {
            //proxy 요청을 보낼 api 시작 부분
            '^/api': {
                target,
                changeOrigin: true
            }
        }
    }
  }