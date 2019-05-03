<template>
  <b-container class="signup">
    <h1>Signup</h1>
    <br />
    <label for="email">Email:</label>
    <b-form-input id="email" type="text"></b-form-input>
    <br />
    <label for="password">Password:</label>
    <b-form-input id="password" type="text"></b-form-input>
    <br />
    <label for="alias">Alias:</label>
    <b-form-input id="alias" type="text"></b-form-input>
    <br />
    <br />
    <b-button class="signup-btn" variant="primary">Signup</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
        password: null;
        alies:null;
        email: bull;
    };
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
