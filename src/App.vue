<template>
  <div id="app" :class="{ ready: isPageReady }">
    <div id="background" alt="Hero image"></div>
    <b-navbar class="mainNavbar" sticky toggleable="lg" variant="light">
      <b-navbar-brand to="/"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item exact active-class="active" to="/">Products</b-nav-item>
          <b-nav-item exact active-class="active" to="/cart">Cart</b-nav-item>
          <b-nav-item exact active-class="active" to="/contact">Contact</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-text class="info">
            {{ cart.items.length }}
            <span v-if="cart.items.length == 1">item</span><span v-else>items</span> in cart,
            totalling {{ cartTotal | currency }}
          </b-nav-text>
          <b-button
            type="button"
            variant="primary"
            exact
            active-class="active"
            to="/signup"
            v-if="!userIsLogged"
            >Signup</b-button
          >
          <b-button
            type="button"
            variant="primary"
            exact
            active-class="active"
            to="/login"
            v-if="!userIsLogged"
            >Login</b-button
          >
          <b-button type="button" @click="logout" v-if="userIsLogged">Logout</b-button>
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
import { firebase } from "@/firebase";
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
    userIsLogged() {
      return this.$store.getters["user/isLogged"];
    },
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
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
#background {
  background: url("https://images.unsplash.com/photo-1505183577574-b52178572cc1");
  height: 30vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.mainNavbar {
  padding: 0 !important;
  box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.15);
  @media (max-width: 991px) {
    .btn {
      margin: 0 !important;
    }
  }
  .navbar-toggler {
    margin: 20px 10px;
  }
}
#nav-collapse {
  margin: 20px 0;
  text-align: center;
}
.btn {
  border-radius: 0 !important;
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
.info {
  margin-right: 20px;
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
