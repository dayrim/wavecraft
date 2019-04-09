<template>
  <div>
    <h1>Cart</h1>

    <table v-if="cart.items.length > 0" class="table table-striped">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in cart.items" :key="index">
          <td>{{ item.product.name }}</td>
          <td>
            {{ item.quantity }} &nbsp;
            <button
              class="btn btn-success"
              :disabled="item.product.inStock == 0"
              @click="increaseQuantity(item)"
            >
              +
            </button>
            <button class="btn btn-danger" @click="decreaseQuantity(item)">
              -
            </button>
          </td>
          <td>{{ (item.quantity * item.product.price) | currency }}</td>
        </tr>

        <tr>
          <td class="text-right" colspan="2">
            <strong>Subtotal</strong>
          </td>

          <td>{{ cartTotal | currency }}</td>
        </tr>

        <tr>
          <td class="text-right" colspan="2">
            <strong>Taxes</strong>
          </td>

          <td>{{ taxAmount(10) | currency }}</td>
        </tr>

        <tr>
          <td class="text-right" colspan="2">
            <strong>Grand total</strong>
          </td>

          <td>{{ (cartTotal + taxAmount(10)) | currency }}</td>
        </tr>

        <tr>
          <td colspan="2"></td>
          <td>
            <button class="btn btn-success" @click="checkout">Checkout</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-else>Your cart is currently empty.</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", ["cartTotal", "taxAmount"]),
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    checkout() {
      this.$store.dispatch("cart/checkout");
    },
  },
};
</script>
