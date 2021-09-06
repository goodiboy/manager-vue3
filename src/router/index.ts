import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/components/Home'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        meta: {
          title: '欢迎页'
        },
        component: () => import('@/views/Welcome')
      }
    ]
  }
]

const router = createRouter({
  history: createMemoryHistory(''),
  routes
})

export default router
