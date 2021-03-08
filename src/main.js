import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// import store from './store'

//全局引用loding组件
import loading from '@/utils/loading'
Vue.use(loading)

import '@/assets/style/main.css'

//mock 通过环境变量来判断是否需要加载启用
if (process.env.NODE_ENV === 'development') {
  require('../mock')
}

//扩充Vue的全局prototype属性
import axios from '@/ajax'
import { to, guid } from '@/utils/common'
Vue.prototype.$axios = axios
Vue.prototype.$to = to
Vue.prototype.$guid = guid

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