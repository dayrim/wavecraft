<template>
  <b-container class="signup">
    <b-form @submit="onSubmit">
      <h1>Signup</h1>
      <br />
      <label for="email">Email:</label>
      <b-form-input id="email" type="text" v-model="email"></b-form-input>
      <br />
      <label for="password">Password:</label>
      <b-form-input id="password" type="text" v-model="password"></b-form-input>
      <br />
      <label for="alias">Alias:</label>
      <b-form-input id="alias" type="text" v-model="alias"></b-form-input>
      <br />
      <br />
      <b-button class="signup-btn" variant="primary">Signup</b-button>
    </b-form>
  </b-container>
</template>

<script>
import firestore from "@/firebase/firestore";
export default {
  data() {
    return {
      password: null,
      alias: null,
      email: null,
    };
  },
  mounted() {
  firestore.collection("users").onSnapshot(function(snapCreatives {
        let source = snapCreatives.metadata.hasPendingWrites ? "Local" : "Server";
        snapCreatives
          .docChanges()
          .forEach(function(snapCreative) {
            let docCreative = snapCreative.doc;

            if (snapCreative.type === "added") {
              
            }
            if (snapCreative.type === "removed") {
              
            }
          });
      })
  },
  methods: {
    onSubmit: function() {},
  },
};
</script>

<style lang="scss">
.signup {
  max-width: 400px;
}
.signup-btn {
  width: 100%;
}
</style>
