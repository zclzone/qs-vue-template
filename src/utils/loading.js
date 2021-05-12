import Vue from 'vue'
import loadingComponent from '@/components/loading/index'

const LoadingConstructor = Vue.extend(loadingComponent)

const instance = new LoadingConstructor({
  el: document.createElement('div')
})

instance.show = true // 默认隐藏
const loading = {
  show() { // 显示方法
    instance.show = true
    document.body.appendChild(instance.$el)
  },
  hide() { // 隐藏方法
    instance.show = false
  }
}

export default {
  install() {
    // 将loading添加到全局
    if (!window.$loading) {
      window.$loading = loading
    }
  }
}