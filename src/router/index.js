import Vue from 'vue'
import VueRouter from 'vue-router'

import { setPageTitle } from '@/utils/page'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('@/views/index'),
    meta: {
      title: '首页',
      keepAlive: true
    }
  },
  {
    path: '/admin',
    component: () => import('@/layout/admin'),
    meta: {
      title: 'Admin',
      keepAlive: true
    },
    children: [
      {
        path: '',
        component: () => import('@/components/helloworld')
      }
    ]
  }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})


// 路由钩子修改页面title
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    setPageTitle(to.meta.title)
  }
  next()
})

// 取消重复打开相同路由时控制台报错误
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
