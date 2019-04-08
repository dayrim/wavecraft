import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import Announcement from "./components/Announcement.vue";
import Article from "./components/Article.vue";
import Contact from "./components/Contact.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import Vuex from "vuex";
import { ADD_PRODUCT_TO_CART,CHECKOUT,INCREASE_PRODUCT_QUANTITY } from "./mutation-types";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "animate.css/animate.min.css";

export const eventBus = new Vue();

Vue.config.productionTip = false;
Vue.component("announcement", Announcement);
Vue.component("appArticle", Article);
Vue.component("appContact", Contact);
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        cart:{
            items:[]
        }
    },
    getters:{
        cartTotal: state=>{
            let total = 0;
            state.cart.items.forEach(function(item){
                total += item.product.price * item.quantity;
            });
            return total;
        },
        getCartItem: (state) => (product) => {
            for(let i=0;i<state.cart.items.length;i++){
                if(state.cart.items[i].product.id ===product.id){
                    return state.cart.items[i];
                }
            }
            return null; 
        },
        taxAmount: (state,getters)=>(percentage)=>((getters.cartTotal * percentage)/100) 
    },
    mutations:{
        [CHECKOUT](state){
            state.cart.items.forEach(function(item){
                item.product.inStock += item.quantity;
            });

            state.cart.items=[];
        },
        [ADD_PRODUCT_TO_CART]: (state,payload) => {
            state.cart.items.push({
                product: payload.product,
                quantity: payload.quantity
            });

            payload.product.inStock -= payload.quantity;
        },
        [INCREASE_PRODUCT_QUANTITY]: (state,payload)=>{
            payload.cartItem.quantity += payload.quantity;
            payload.product.inStock -= payload.quantity;
        }
    },
    actions:{
        [ADD_PRODUCT_TO_CART]({commit,getters},payload){
            let cartItem = getters.getCartItem(payload.product);
            payload.cartItem = cartItem;
            
            if(cartItem == null){
                payload.cartItem = getters.getCartItem(payload.product);
                commit(ADD_PRODUCT_TO_CART,payload);
            }
            else{
                commit(INCREASE_PRODUCT_QUANTITY,payload);
            }
        }
    }
});

Vue.filter("currency", function(value) {
    let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    });

    return formatter.format(value);
});

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount("#app");
