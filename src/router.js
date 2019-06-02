import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Home from './views/Home'
import Add from './views/Add'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: "list",
          name: "list",
          component: () => import(/* webpackChunkName: "list" */ './views/List/')
        },
        {
          path: "user",
          name: "user",
          component: () => import(/* webpackChunkName: "user" */ './views/User/')
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
