<template>
  <div class="row">
    <div class="container">
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-6 col-lg-4 col-xl-3 margin-bottom"
        >
          <div class=" card">
            <img
              class="card-img-top"
              :src="product.image"
              alt="Card image cap"
              @click="clickedImage(product)"
            />
            <div class="card-body">
              <router-link
                tag="h4"
                :to="{ name: 'ViewProduct', params: { productId: product.id } }"
                class="card-title"
                >{{ product.name }}</router-link
              >
              <p class="card-text">{{ product.description }}</p>
            </div>
            <div class="card-footer">
              <strong class="price">{{ product.price | currency }}</strong>
              <span
                class="number-in-stock"
                :class="{
                  few: product.inStock < 10 && product.inStock > 0,
                  none: product.inStock == 0,
                }"
                >{{ product.inStock }} in stock</span
              >
              <button
                class="btn btn-success add-to-cart"
                :disabled="product.inStock <= 0"
                @click="addProductToCart(product, 1)"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { products } from "../data/products";

export default {
  data() {
    return {
      products: products,
    };
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    clickedImage(product) {
      this.$router.push({
        name: "ViewProduct",
        params: {
          productId: product.id,
        },
        query: {
          discount: 10,
        },
      });
    },
    addProductToCart(product, quantity) {
      this.$store.dispatch("cart/addProductToCart", {
        product: product,
        quantity: quantity,
      });
    },
  },
};
</script>

<style lang="scss">
.number-in-stock.few {
  color: #e0a14f;
}
.number-in-stock.none {
  color: #c45e5e;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}
.add-to-cart {
  margin: 1rem 0 0 0;
}
.price {
  text-align: left;
  flex: 1 0 50%;
  display: inline-block;
}
.number-in-stock {
  text-align: right;
  flex: 1 1 50%;
  display: inline-block;
}
.card-text {
  font-weight: normal;
}
.card-img-top {
  height: 300px;
  object-fit: cover;
}
@media (min-width: 768px) {
  .card-img-top {
    height: 200px;
  }
}
@media (min-width: 1200px) {
  .card-img-top {
    height: 175px;
  }
}
.margin-bottom {
  margin-bottom: 2rem;
}
.card {
  height: 100%;
}
</style>
