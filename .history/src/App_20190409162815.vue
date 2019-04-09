<template>
  <div id="app" :class="{ ready: isPageReady }">
    <b-navbar class="mainNavbar" sticky toggleable="lg" variant="light">
      <b-navbar-brand to="/"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item exact active-class="active" to="/">Products</b-nav-item>
          <b-nav-item exact active-class="active" to="/cart">Cart</b-nav-item>
          <b-nav-item exact active-class="active" to="/contact">Contact</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-text>
            <div class="navbar-text">
              {{ cart.items.length }}
              <span v-if="cart.items.length == 1">item</span><span v-else>items</span> in cart,
              totalling {{ cartTotal | currency }}
            </div></b-nav-text
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <transition name="route" mode="out-in">
      <router-view name="discount"> </router-view>
    </transition>
    <b-container>
      <b-row>
        <b-col>
          <br /><br />
          <transition name="route" mode="out-in">
            <router-view></router-view>
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPageReady: false,
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.getters["cart/cartTotal"];
    },
  },
  mounted: function() {
    this.$nextTick(function() {
      setTimeout(() => {
        this.isPageReady = true;
      }, 0);
    });
  },
};
</script>

<style lang="scss">
.mainNavbar {
  box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.15);
}
.flex {
  display: flex;
}
.flex.flex-column {
  flex-direction: column;
}
.flex.flex-row {
  flex-direction: row;
}
.flex.justify-center {
  justify-content: center;
}
.flex.justify-left {
  justify-content: flex-start;
}
.flex.justify-right {
  justify-content: flex-end;
}
.flex.align-center {
  align-items: center;
}
.flex.align-left {
  align-items: flex-start;
}
.flex.align-right {
  align-items: flex-end;
}
/* Navigation */
.navbar .stats {
  margin-top: 15px;
}
ul {
  list-style: none;
}
.btn {
  margin-right: 20px;
}
input[type="radio"] + label,
input[type="checkbox"] + label {
  font-weight: normal;
}

#app {
  opacity: 0;
  transition: opacity 1s ease;
}

#app.ready {
  opacity: 1;
}

.route-enter-active,
.route-leave-active {
  transition: opacity 0.15s ease;
}

.route-enter,
.route-leave-to {
  opacity: 0;
}
</style>
