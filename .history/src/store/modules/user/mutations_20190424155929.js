import { UPDATE_EMAIL, UPDATE_DISPLAYNAME, UPDATE_PASSWORD } from "./mutation-types";

export default {
  [UPDATE_EMAIL](state, payload) {
    state.items.forEach(function(item) {
      item.product.inStock += item.quantity;
    });

    state.items = [];
  },
  [UPDATE_DISPLAYNAME]: (state, payload) => {
    state.items.push({
      product: payload.product,
      quantity: payload.quantity,
    });

    payload.product.inStock -= payload.quantity;
  },
  [UPDATE_PASSWORD]: (state, payload) => {
    payload.cartItem.quantity += payload.quantity;
    payload.product.inStock -= payload.quantity;
  },
};
