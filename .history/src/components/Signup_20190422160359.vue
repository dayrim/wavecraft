<template>
  <b-container fluid>
    <h1>Signup</h1>
    <br />
    <b-row>
      <b-col> <label for="email">Email:</label></b-col>
      <b-col     <b-form-input id="email" type="text"></b-form-input></b-col>
    </b-row>


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
