import { createRouter, createWebHistory } from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'
import CostomLayout from '@/layouts/CostomLayout.vue'
import Home from '@/views/home/index.vue'
import User from '@/views/user/index.vue'
import UserDetail from '@/views/user/detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: CostomLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/user',
          name: 'user',
          component: User
        },
        {
          path: '/user/:id',
          name: 'user-detail',
          component: UserDetail
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
