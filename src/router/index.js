import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import About from '../views/about/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  // 指定路由模式
  history: createWebHashHistory(),
  // 路由地址
  routes
})

export default router
