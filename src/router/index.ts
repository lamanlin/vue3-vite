import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/pages/login/Index.vue')
  },
  {
    path: '/',
    redirect: 'Home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/layout/Index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
