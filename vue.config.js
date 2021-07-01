// 开发环境 要配置代理，用vue-cli
module.exports = {
  devServer: {
    // proxy: {
      // '/api': {
      //   target: '<url>',
      //   ws: true,
      //   changeOrigin: true
      // },
      // '/foo': {
      //   target: '<other_url>'
      // }
    // }
    proxy: 'http://backend-api-01.newbee.ltd'
  }
}