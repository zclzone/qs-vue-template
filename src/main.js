import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// import store from './store'

// 引用基础公用样式
import '@/assets/style/main.scss'

//注册全局loding组件
import loading from '@/utils/loading'
Vue.use(loading)

//mock 通过环境变量来判断是否需要加载启用
if (+process.env.VUE_APP_NEED_MOCK) {
  require('../mock')
}

//扩充Vue的全局prototype属性
import * as commons from '@/utils/common'
Object.keys(commons).forEach(key => {
  Vue.prototype['$' + key] = commons[key]
})

//全局过滤器
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
