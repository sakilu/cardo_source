import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/Admin'
import addticket from '../components/addnewticket'
import addticketpage from '@/components/addticketpage'
import addtrustticket from '@/components/addtrustticket'
import addtrustticketpage from '@/components/addtrustticketpage'
import groupBuySet from '@/components/groupBuySet'
import addnewticketdetail from '@/components/addnewticketdetail'
import addtrustticketdetail from '@/components/addtrustticketdetail'
import voucheradmin from '@/components/voucheradmin'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: admin,
      children: [
        {
          path: 'addticket',
          name: 'addticket',
          component: addticket
        },
        {
          path: 'addtrustticket',
          name: 'addtrustticket',
          component: addtrustticket
        },
        {
          path: 'addticketpage',
          name: 'addticketpage',
          component: addticketpage
        },
        {
          path: 'addtrustticketpage',
          name: 'addtrustticketpage',
          component: addtrustticketpage
        },
        {
          path: 'addnewticketdetail',
          name: 'addnewticketdetail',
          component: addnewticketdetail
        },
        {
          path: 'addtrustticketdetail',
          name: 'addtrustticketdetail',
          component: addtrustticketdetail
        },
        {
          path: 'voucheradmin',
          name: 'voucheradmin',
          component: voucheradmin
        },
        {
          path: 'groupBuySet',
          name: 'groupBuySet',
          component: groupBuySet
        }
      ]
    }
  ]
})
