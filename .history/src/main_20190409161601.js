import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.filter("currency", function(value) {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return formatter.format(value);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
