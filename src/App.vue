<template>
  <div id="app">
    <div id="map" />
    <router-view />
  </div>
</template>
<script>
import Earth from '@/utils/earth';

export default {
  mounted() {
    const earth = new Earth('map', { x: 103.7, y: 29.55, z: 3000 });
    earth.addGoogleMapLayer();
    earth.addTmsLayer('http://172.16.122.191:5000/leshan-tiles/{z}/{x}/{y}.png');
    earth.addTerrainLayer('http://172.16.122.191:5000/leshan-terrain/');
    // console.log(earth.detectZoomLevel(5000));
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#map {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
.cesium-widget-credits {
  display: none !important;
}
</style>
