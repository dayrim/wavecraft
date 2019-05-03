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
    return {
      lat: 53,
      lng: -2,
    };
  },

  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false,
      });
    },
  },
  mounted() {
    this.renderMap();
  },
};
</script>

<style lang="scss"></style>
