<template>
  <div class="map">
    <h2>Aadress</h2>
    <div class="google-map" id="map"></div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKMkSeGM_eRe6uw4Qk8lQWU3zIOxtXnRQ"></script>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      lat: 53,
      lng: -2,
    };
  },

  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lang: this.lng },
      });
    },
  },
  mounted() {
    this.renderMap();
  },
};
</script>

<style lang="scss"></style>
