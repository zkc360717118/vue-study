import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from "@/views/Cart"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // path: '/goods/:goodsId/user/:name',
      path: '/goods',
      name: 'Goodslist',
      component: GoodsList,
      children:[
        {
          path: 'title',
          name: 'title',
          component: Title
        },
        {
          path: 'image',
          name: 'image',
          component: Image
        }
      ]
    },
    {
      path: "/cart",
      component: Cart
    }
  ]
})
