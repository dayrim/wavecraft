import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * Assign the modules to the store.
   */
  modules: {
    cart,
  },
});
