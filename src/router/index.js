import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Distance from '../views/Distance.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/distance',
    name: 'distance',
    component: Distance
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
