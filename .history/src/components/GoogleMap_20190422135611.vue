<template>
  <div class="map">
    <h2>Aadress</h2>
    <div class="google-map" id="map"></div>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {};
  },

  methods: {
    renderMap() {
      const map = new google.maps.Map();
    },
  },
  mounted() {
    renderMap();
  },
};
</script>

<style lang="scss"></style>
