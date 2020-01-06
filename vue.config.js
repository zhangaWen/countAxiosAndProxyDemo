module.exports = {
  devServer: {
    proxy: {
      'api' :{
        target: 'http://localhost:4000',
        changeOrigen: true,
        pathRewrite: {
          '/api': ''
        }
      },
      'baidu' :{
        target: 'http://www.baidu.com',
        changeOrigen: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}