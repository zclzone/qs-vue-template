const { title } = require('./src/settings.js')
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      // 修改初始title
      args[0].title = title
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
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    //使用代理解决前端应用和后端 API 跨域问题
    // proxy: 'http://localhost:3000/api',
    // before: require('./mock')
  },
}