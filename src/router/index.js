import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const host = window.location.host
const parts = host.split('.')
const domainLength = parts.length
let routesByDomain = []

console.log('Host: ' + host)
console.log('Parts: ' + parts)
console.log('Domain length: ' + domainLength)

switch (parts[0]) {
  case 'dibal':
    routesByDomain = [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
    ]
    break;

  default:
    routesByDomain = [
      {
        path: '/',
        name: 'About',
        component: About
      }
    ]
    break;
}

const routes = [
  ...routesByDomain
]

console.log(routes)
console.log('test')

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
