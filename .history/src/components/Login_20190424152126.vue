<template>
  <div class="signup">
    <b-form @submit.prevent="signup">
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
      <p v-if="feedback ? true : false">
        {{ this.feedback }}
      </p>
      <b-button type="submit" id="signup-btn" variant="primary">Signup</b-button>
    </b-form>
  </div>
</template>
