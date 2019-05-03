<template>
  <b-container fluid>
    <br />

    <b-card bg-variant="dark" text-variant="white" title="Signup">
      <b-card-text>
        <label for="email">Email:</label>
        <b-form-input id="email" type="text"></b-form-input>
        <label for="password">Password:</label>
        <b-form-input id="password" type="text"></b-form-input>
        <label for="alias">Alias:</label>
        <b-form-input id="alias" type="text"></b-form-input>
        <br />
      </b-card-text>

      <b-button variant="primary">Signup</b-button>
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
