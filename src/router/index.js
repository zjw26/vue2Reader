import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'
import Book from '@/views/book'
import More from '@/views/more'
import Category from '@/views/category'
import Rank from '@/views/Rank'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/more',
      name: 'more',
      component : More
    },
    {
      path: '/book',
      name: 'book',
      component : Book
    },
    {
      path: '/category',
      name: 'category',
      component : Category
    },
    {
      path: '/rank',
      name: 'rank',
      component : Rank
    }
  ]
})
