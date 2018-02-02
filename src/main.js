import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

console.log(process.env.APP_NAME);

new Vue({
  render: h => h(App)
}).$mount("#app");
