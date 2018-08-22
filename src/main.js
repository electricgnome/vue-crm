import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import router from "./routes"
import axios from "axios";

Vue.config.productionTip = false;

window.Event = new Vue();
window.axios = axios
new Vue({
  store,
  router, 
  render: h => h(App)
}).$mount("#app");
