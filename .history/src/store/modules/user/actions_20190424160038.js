import * as Mutate from "./mutation-types";

export const addProductToCart = ({ commit, getters }, payload) => {
  let cartItem = getters.getCartItem(payload.product);
  payload.cartItem = cartItem;

  if (cartItem == null) {
    payload.cartItem = getters.getCartItem(payload.product);
    commit(Mutate.ADD_PRODUCT_TO_CART, payload);
  } else {
    commit(Mutate.INCREASE_PRODUCT_QUANTITY, payload);
  }
};

export const checkout = ({ commit }) => {
  commit(Mutate.CHECKOUT);
};

export default {
  addProductToCart,
  checkout,
};
