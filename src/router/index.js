import Vue from 'vue'
import VueRouter from 'vue-router'
import show_all from '../views/show_all.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component: show_all

  },
  {
    path: '/active',
    name: 'active',
    props: { filter: "active" },
    component: show_all
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/show_active.vue')
  },
  {
    path: '/completed',
    name: 'completed',
    props: { filter: "completed" },
    component: show_all
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/show_completed.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
