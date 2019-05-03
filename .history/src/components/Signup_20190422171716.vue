<template>
  <b-container class="signup">
    <b-form @submit="signup">
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
      <b-tooltip :show.sync="feedback ? 'true' : null" target="signup-btn" placement="top">
        Hello <strong>World!</strong>
      </b-tooltip>
      <b-button id="signup-btn" variant="primary">Signup</b-button>
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
      feedback: 232,
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
  methods: {
    signup: function() {
      if (this.alias) {
      } else {
        this.feedback = "You must enter an alias";
      }
    },
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
