import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import { firebase } from "@/firebase";

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

let vueInstance = null;

// wait for firebase auth to init before creating the app
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch("user/updateEmail", user.email);
    store.dispatch("user/updateDisplayName", user.displayName);
  } else {
    store.dispatch("user/updateEmail", null);
    store.dispatch("user/updateDisplayName", null);
  }
  // init app if not alreay created

  if (!vueInstance) {
    vueInstance = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount("#app");
  }
});
