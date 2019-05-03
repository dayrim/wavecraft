<template>
  <b-container fluid>
    <h1>Signup</h1>
    <br />

    <label for="email">Email:</label>
    <b-form-input id="email" type="text"></b-form-input>
    <label for="password">Password:</label>
    <b-form-input id="password" type="text"></b-form-input>
    <label for="alias">Alias:</label>
    <b-form-input id="alias" type="text"></b-form-input>
    <br />
    <b-button variant="primary">Signup</b-button>

    <b-card title="Signup">
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
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
