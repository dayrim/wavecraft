<template>
  <b-container fluid>
    <h1>Signup</h1>
    <br />
    <b-row>
      <b-col>1 of 3</b-col>
      <b-col cols="5">2 of 3 (wider)</b-col>
      <b-col>3 of 3</b-col>
    </b-row>

    <label for="email">Email:</label>
    <b-form-input id="email" type="text"></b-form-input>
    <label for="password">Password:</label>
    <b-form-input id="password" type="text"></b-form-input>
    <label for="alias">Alias:</label>
    <b-form-input id="alias" type="text"></b-form-input>
    <br />
    <b-button variant="primary">Signup</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
