const { title } = require('./src/settings.js')
const port = process.env.VUE_APP_PORT || 3000

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    name: title
  },
  chainWebpack: config => {
    // 移除 prefetch 插件，它可能会导致很多无意义的请求
    config.plugins.delete('prefetch')

    // config.plugin('html').tap(args => {
    //   // 添加初始化变量 使用'<%= htmlWebpackPlugin.options.xxx %>'访问
    //   args[0].title = title
    //   return args
    // })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          /* 阿里字体图标 */
          //@import '//at.alicdn.com/t/font_1186631_dnfzsu5n7yp.css';
          /* 字体 */
          @import '//fonts.googleapis.com/css?family=Encode+Sans+Condensed:400,600';
          /* 重置样式 */
          @import '@/assets/style/reset.scss';
          /* 通用样式 */
          @import '@/assets/style/common.scss';
        `
      }
    }
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
  },
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     title,
  //   }
  // },
}