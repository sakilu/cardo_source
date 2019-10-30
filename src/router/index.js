import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/Admin'
import addticket from '../components/addnewticket'
import addticketpage from '@/components/addticketpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: admin,
      children: [
        {
          path: 'addticket',
          name: 'addticket',
          component: addticket
          // children: [
          //   {
          //     path: 'addticketpage',
          //     name: 'addticketpage',
          //     component: addticketpage
          //   }
          // ]
        },
        {
          path: 'addticketpage',
          name: 'addticketpage',
          component: addticketpage
        }
      ]
    }
  ]
})
