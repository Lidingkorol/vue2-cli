import Vue from 'vue'
import Router from 'vue-router'


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
      component:resolve => require(['@/views/Game'],resolve)
    },
    {
      path: '/center',
      name: 'Center',
      component:resolve => require(['@/views/Center'],resolve)
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component:resolve => require(['@/views/Recharge'],resolve)
    },
    {
      path: '/test',
      name: 'Test',
      component:resolve => require(['@/views/Test'],resolve)
    }

  ]
})
