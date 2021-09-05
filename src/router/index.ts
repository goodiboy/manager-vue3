import { createRouter, createMemoryHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/components/Home'
const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createMemoryHistory(''),
  routes
})

export default router
