const { title } = require('./src/settings.js')
const port = process.env.PORT || 3000

module.exports = {
  publicPath: '/',
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
  devServer: {
    port, // 端口号
    open: true, // 自动打开浏览器
    // 让浏览器显示警告和错误，false：不显示  true：显示
    overlay: {
      warnings: false,
      errors: true
    },
    /**
     * proxy:代理，代理解决本地开发跨域问题
     * 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
     */
    // proxy: 'http://www.qszone.com',
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'http://www.qszone.com',  //要访问的跨域的域名
        ws: false, // 是否启用websockets
        secure: false, // 使用的是http协议则设置为false，https协议则设置为true
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    // after: require('./mock')
  },
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     title,
  //   }
  // },
}