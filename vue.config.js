module.exports = {
  publicPath: './',
  outputDir: 'dist',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      // 修改初始title
      args[0].title = "QS VUE TEMPLATE"
      return args
    })
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.mode = 'production'
      //打包文件大小配置
      config['performance'] = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
      }
    }
  },
  //devServer: {
  //使用代理解决前端应用和后端 API 跨域问题
  // proxy: 'http://localhost:3000/api'
  //}
}