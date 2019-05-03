<template>
  <div>
    <h2>Contact Us</h2>
    <slot name="top"></slot>

    <form>
      <div class="form-group">
        <label for="yourName">Your name</label>
        <input id="yourName" type="text" class="form-control" placeholder="Enter your name" />
      </div>

      <div class="form-group">
        <label for="emailAddress">E-mail address</label>
        <input id="emailAddress" type="email" class="form-control" placeholder="Enter your email" />
      </div>

      <slot></slot>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          class="form-control"
          placeholder="Enter your message"
        ></textarea>
      </div>

      <slot name="bottom">
        <p>We will respon within 2 bussiness days</p>
      </slot>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>
