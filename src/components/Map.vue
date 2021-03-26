<template>
  <div id="cesiumContainer" />
</template>

<script>
import {
  Cartesian3,
  // CesiumTerrainProvider,
  UrlTemplateImageryProvider,
  Viewer,
} from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export default {
  mounted() {
    this.initViewer();
  },
  methods: {
    initViewer() {
      const googleMapProvider = new UrlTemplateImageryProvider({
        url: 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali',
      });
      const viewer = new Viewer('cesiumContainer', {
        baseLayerPicker: false,
        fullscreenButton: false,
        geocoder: false,
        homeButton: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        timeline: false,
        animation: false,
        imageryProvider: googleMapProvider,
      });
      window.viewer = viewer;

      // viewer.scene.terrainProvider = new CesiumTerrainProvider({
      //   // 正式部署时根据 env 文件更新前缀
      //   url: 'http://localhost:3000/test/',
      // });
      viewer.scene.globe.showGroundAtmosphere = false;
      viewer.camera.setView({
        destination: Cartesian3.fromDegrees(-113.17267, 37.4622, 3500),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#cesiumContainer {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
