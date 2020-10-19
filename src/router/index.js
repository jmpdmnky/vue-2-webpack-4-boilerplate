/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import OtherPage from '@/pages/OtherPage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/otherpage',
      name: 'OtherPage',
      component: OtherPage,
    }
  ]
})

export default router
