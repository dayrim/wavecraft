<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <img class="thumbnail" :src="product.image" />
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p>
          <strong>Price:</strong> {{ (product.price - discount) | currency
          }}<span v-if="discount > 0">(save {{ discount | currency }})</span>
        </p>
        <p><strong>In stock:</strong> {{ product.inStock }}</p>
        <p>{{ product.description }}</p>

        <button
          class="btn btn-success add-to-cart"
          :disabled="product.inStock <= 0"
          @click="addProductToCart()"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../data/products";
export default {
  props: {
    productId: {
      required: true,
    },
  },
  data() {
    return {
      products: products,
      product: null,
      discount: 0,
    };
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  watch: {
    productId(newValue) {
      this.product = this.getProduct(newValue);
      this.discount = this.getDiscount(this.product.price, this.$route.query.discount);
    },
  },
  created() {
    this.$watch("$route.query.discount", newValue => {
      this.discount = this.getDiscount(this.product.price, newValue);
    });
    this.product = this.getProduct(this.productId);

    if (typeof this.$route.query.discount !== "undefined") {
      this.discount = this.getDiscount(this.product.price, this.$route.query.discount);
    }
  },
  methods: {
    getProduct(productId) {
      let match = null;

      this.products.forEach(function(product) {
        if (product.id == productId) {
          match = product;
        }
      });

      return match;
    },
    addProductToCart() {
      this.$store.dispatch("cart/addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
    getDiscount(originalPrice, percentage) {
      if (!percentage) {
        return 0;
      }
      return (originalPrice * percentage) / 100;
    },
  },
};
</script>

<style lang="scss">
.thumbnail {
  float: left;
  max-height: 400px;
  max-width: 400px;
  margin-right: 2rem;
}
</style>
