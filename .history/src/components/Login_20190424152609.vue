<template>
  <div class="login">
    <b-form @submit.prevent="login">
      <h1>Login</h1>
      <br />
      <label for="email">Email:</label>
      <b-form-input ref="email" id="email" type="text" v-model="email"></b-form-input>
      <br />
      <label for="password">Password:</label>
      <b-form-input ref="password" id="password" type="text" v-model="password"></b-form-input>
      <br />
      <br />
      <p v-if="feedback ? true : false">
        {{ this.feedback }}
      </p>
      <b-button type="submit" id="login-btn" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  date() {
    return {
      email: null,
      password: null,
      feedback: null,
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
    },
  },
};
</script>
<style lang="scss">
.login {
  margin: 0 auto;
  max-width: 400px;
}
#login-btn {
  width: 100%;
}
</style>
