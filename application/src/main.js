import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/scss/medical.scss'
import Vuelidate from 'vuelidate'
import Api from './api'
import vuetify from './plugins/vuetify'

Api.init()

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
