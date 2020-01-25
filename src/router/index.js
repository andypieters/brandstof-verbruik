import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Account/Login.vue'
import Register from '../views/Account/Register.vue'
import ForgotPassword from '../views/Account/ForgotPassword.vue'

import Vehicles from '../views/Vehicles/Vehicles.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/account/login',
    name: 'login',
    component: Login
  },
  {
    path: '/account/register',
    name: 'register',
    component: Register
  },
  {
    path: '/account/forgot-password',
    name: 'forgotPassword',
    component: ForgotPassword
  },
  {
    path: '/vehicles/forgot-password',
    name: 'vehicles',
    component: Vehicles
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
