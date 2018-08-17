import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

window.Event = new Vue();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
