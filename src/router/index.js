import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const host = window.location.host
const parts = host.split('.')
const domainLength = parts.length
let routesByDomain = []

if (domainLength === 2) {
  routesByDomain = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
} else if(domainLength === 3) {
  routesByDomain = [
    {
      path: '/',
      name: 'About',
      component: About
    }
  ]
}

const routes = [
  ...routesByDomain
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
