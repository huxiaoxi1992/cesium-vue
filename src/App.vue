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
    const earth = new Earth('map', { x: 107.6, y: 33.9, z: 3000 });
    earth.addGoogleMapLayer();
    earth.addTerrainLayer('http://localhost:3000/shanxi/');
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
