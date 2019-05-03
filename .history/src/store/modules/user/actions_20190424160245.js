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

export const updateEmail = ({ commit }, payload) => {
  commit(Mutate.UPDATE_EMAIL, payload);
};
export const updateDisplayName = ({ commit }, payload) => {
  commit(Mutate.UPDATE_DISPLAYNAME, payload);
};
export const updatePassword = ({ commit }, payload) => {
  commit(Mutate.UPDATE_PASSWORD, payload);
};

export default {
  updateEmail,
  checkout,
};
