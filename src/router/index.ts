import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    meta: {
      title: '你好'
    },
    component: () => import('@/components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
