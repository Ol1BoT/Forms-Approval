import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewLeave from '../views/leave/NewLeave.vue'
import ViewLeave from '../views/leave/ViewLeave.vue'
import ViewPD from '../views/pd/ViewPD.vue'
import SuperAdminArea from '../views/super-admin/SAHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/new-leave',
    name: 'NewLeave',
    component: NewLeave
  },
  {
    path: '/view-leave',
    name: 'ViewLeave',
    component: ViewLeave
  },
  {
    path: '/view-pd',
    name: 'ViewPD',
    component: ViewPD
  },
  {
    path: '/saa',
    name: 'SuperAdminArea',
    component: SuperAdminArea
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
