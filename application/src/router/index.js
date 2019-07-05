import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/autenticacao',
      name: 'auth',
      component: () => import('@/modules/auth')
    }
  ]
})
