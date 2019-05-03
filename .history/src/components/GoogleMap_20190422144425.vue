<template>
  <div class="map">
    <h2>Aadress</h2>
    <br />
    <hr />
    <div class="google-map" id="map"></div>
    <br />
    <br />
  </div>
</template>

<script>
import postscribe from "postscribe";
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
      // eslint-disable-next-line no-undef
      new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false,
      });
    },
  },
  mounted() {
    postscribe(`#${vm.compId}`, `${vm.script}`);
    this.renderMap();
  },
};
</script>

<style lang="scss">
.map {
  position: relative;
}
.google-map {
  width: 100%;
  height: 800px;
  margin: 0 auto;
  background: #ffffff;
}
</style>
