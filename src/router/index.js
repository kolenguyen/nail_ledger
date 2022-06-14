import { createRouter, createWebHistory } from 'vue-router'
import NavView from '../views/NavView.vue'
import checkOut from '../views/checkOut.vue'
import Service from '../views/Service.vue'
import Ledger from '../views/Ledger.vue'
import Technician from '../views/Technician.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: NavView
  },
  {
    path:'/ledger',
    name: 'ledger',
    component: Ledger
  },
  {
    path:'/technician',
    name:'technician',
    component: Technician
  },
  {
    path:'/checkOut',
    name:'checkOut',
    component: checkOut,
  },
  {
    path:'/service',
    name:'service',
    component: Service,
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   : () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
