import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/login'
/* Layout */
// import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  }
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'Dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       meta: { title: 'Dashboard', icon: 'dashboard' }
  //     }
  //   ]
  // }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export default router
