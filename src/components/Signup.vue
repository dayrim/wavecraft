<template>
  <div class="signup">
    <b-form @submit.prevent="signup">
      <h1>Signup</h1>
      <br />
      <label for="email">Email:</label>
      <b-form-input ref="email" id="email" type="text" v-model="email"></b-form-input>
      <br />
      <label for="password">Password:</label>
      <b-form-input ref="password" id="password" type="text" v-model="password"></b-form-input>
      <br />
      <label for="alias">Alias:</label>
      <b-form-input ref="alias" id="alias" type="text" v-model="alias"></b-form-input>
      <br />
      <br />
      <p v-if="feedback ? true : false">
        {{ this.feedback }}
      </p>
      <b-button type="submit" id="signup-btn" variant="primary">Signup</b-button>
    </b-form>
  </div>
</template>

<script>
import { firestore, firebase } from "@/firebase";
import slugify from "slugify";

export default {
  data() {
    return {
      password: null,
      alias: null,
      email: null,
      feedback: null,
      slug: null,
    };
  },
  mounted() {
    firestore.collection("users").onSnapshot(function(snapCreatives) {
      snapCreatives.docChanges().forEach(function(snapCreative) {
        let docCreative = snapCreative.doc;

        if (snapCreative.type === "added") {
          console.log(docCreative.data());
        }
        if (snapCreative.type === "removed") {
          console.log(docCreative.data());
        }
      });
    });
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    signup: function() {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$_+~.()'"!\-:@]/g,
          lower: true,
        });
        let ref = firestore.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "This alias already exists";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  alias: this.alias,
                  cart: this.cart,
                  user_id: cred.user.uid,
                });
                cred.user
                  .updateProfile({
                    displayName: this.alias,
                  })
                  .then(() => {
                    this.$store.dispatch("user/updateEmail", this.email);
                    this.$store.dispatch("user/updateDisplayName", this.displayName);
                  });
                // this.feedback = "Login successfull!";
              })
              .then(() => {
                this.$router.push({ name: "Products" });
              })
              .catch(err => {
                this.feedback = err.message;
              });
          }
        });
        this.feedback = null;
      } else {
        this.feedback = "You must enter all fields";
      }
    },
  },
};
</script>

<style lang="scss">
.signup {
  margin: 0 auto;
  max-width: 400px;
}
#signup-btn {
  width: 100%;
}
</style>
