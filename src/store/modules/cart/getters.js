export default {
  cartTotal: state => {
    let total = 0;

    state.items.forEach(function(item) {
      total += item.product.price * item.quantity;
    });
    return total;
  },
  getCartItem: state => product => {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].product.id === product.id) {
        return state.items[i];
      }
    }
    return null;
  },
  taxAmount: (state, getters) => percentage => (getters.cartTotal * percentage) / 100,
};
