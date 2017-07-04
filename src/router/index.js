import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import Game from '../views/Game'
import Center from '../views/Center'
import Recharge from '../views/Recharge'




Vue.use(Router)





export default new Router({
  mode:'history',
  routes: [
    {
      path: '*',
      redirect: '/game'
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/center',
      name: 'Center',
      component: Center
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    }

  ]
})
