import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component : About
    // },
    // {
    //   path: '/book',
    //   name: 'book',
    //   component : Book
    // },
    // {
    //   path: '/banner',
    //   name: 'banner',
    //   component : Banner
    // }
  ]
})
