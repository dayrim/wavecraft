<template>
  <div class="map"><h2>Aadress</h2></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    renderMap();
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map();
    },
  },
};
</script>

<style lang="scss"></style>
