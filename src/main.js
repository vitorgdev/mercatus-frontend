import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import Api from "./api";
import "./assets/style/main.scss";

Vue.config.productionTip = false;

Api.init();

Api.query("users");

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
