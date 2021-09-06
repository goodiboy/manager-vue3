import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/home/Home'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        meta: {
          title: '欢迎页'
        },
        component: () => import('@/views/welcome/Welcome')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录页'
    },
    component: () => import('@/views/login/Login')
  }
]

const router = createRouter({
  history: createWebHashHistory(''),
  routes
})

export default router
