import Vue from 'vue'
import VueRouter from 'vue-router'
import show_all from '../views/show_all.vue'

Vue.use(VueRouter)

const tasks = [
  { id: 1, value: "task1", completed: false },
  { id: 2, value: "task2", completed: false },
  { id: 3, value: "task3", completed: false },
  { id: 4, value: "task4", completed: true },
  { id: 5, value: "task5", completed: false },
  { id: 6, value: "task6", completed: true },
  { id: 7, value: "task7", completed: false }
]

const routes = [
  {
    path: '/',
    name: 'all',
    props: { tasks: tasks },
    component: show_all

  },
  {
    path: '/active',
    name: 'active',
    props: { tasks: tasks, filter: "active" },
    component: show_all
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/show_active.vue')
  },
  {
    path: '/completed',
    name: 'completed',
    props: { tasks: tasks, filter: "completed" },
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
