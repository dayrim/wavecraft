import { CHECKOUT, ADD_PRODUCT_TO_CART, INCREASE_PRODUCT_QUANTITY } from "./mutation-types";

export default {
  [CHECKOUT](state) {
    state.items.forEach(function(item) {
      item.product.inStock += item.quantity;
    });

    state.items = [];
  },
  [ADD_PRODUCT_TO_CART]: (state, payload) => {
    state.items.push({
      product: payload.product,
      quantity: payload.quantity,
    });

    payload.product.inStock -= payload.quantity;
  },
  [INCREASE_PRODUCT_QUANTITY]: (state, payload) => {
    payload.cartItem.quantity += payload.quantity;
    payload.product.inStock -= payload.quantity;
  },
};
