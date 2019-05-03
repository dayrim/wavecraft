<template>
  <b-container>
    <b-row>
      <h1>Signup</h1>
      <br />
      <b-col></b-col>
      <b-col cols="8">
        <label for="email">Email:</label>
        <b-form-input id="email" type="text"></b-form-input>
        <label for="password">Password:</label>
        <b-form-input id="password" type="text"></b-form-input>
        <label for="alias">Alias:</label>
        <b-form-input id="alias" type="text"></b-form-input>
        <br />
        <b-button variant="primary">Signup</b-button></b-col
      >
      <b-col></b-col>
    </b-row>
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
