import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('@/pages/login/index.vue')
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/pages/home/index.vue'),
        name: 'Home',
        meta: {
          title: '首页',
          icon: 'House'
        }
      },
      {
        path: '/manage',
        name: 'Manage',
        meta: {
          title: '系统管理',
          icon: 'Setting'
        },
        children: [
          {
            path: '/students',
            name: 'Students',
            component: () => import('@/pages/manage/Students.vue'),
            meta: {
              title: '学生管理',
              icon: 'User'
            }
          },
          {
            path: '/department',
            name: 'Department',
            component: () => import('@/pages/manage/Department.vue'),
            meta: {
              title: '部门管理',
              icon: 'Service'
            }
          }
        ]
      },
      {
        path: '/chart',
        name: 'Chart',
        meta: {
          title: '图表管理',
          icon: 'Setting'
        },
        children: [
          {
            path: '/students',
            name: 'Students',
            component: () => import('@/pages/chart/PineChart.vue'),
            meta: {
              title: '学生管理',
              icon: 'User'
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})
export default router
