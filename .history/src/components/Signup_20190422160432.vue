<template>
  <b-container fluid>
    <h1>Signup</h1>
    <br />
    <b-row>
      <b-col> <label for="email">Email:</label></b-col>
      <b-col cols="8"> <b-form-input id="email" type="text"></b-form-input></b-col>
    </b-row>
    <b-row>
      <b-col> <label for="password">Password:</label></b-col>
      <b-col cols="8"> <b-form-input id="password" type="text"></b-form-input></b-col>
    </b-row>
    <b-row>
      <b-col> <label for="alias">Alias:</label></b-col>
      <b-col cols="8"> <b-form-input id="alias" type="text"></b-form-input></b-col>
    </b-row>

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
