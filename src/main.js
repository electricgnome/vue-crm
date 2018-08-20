import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

window.Event = new Vue();

new Vue({
  store,
  VueRouter,
  render: h => h(App)
}).$mount("#app");
