/* eslint-disable no-underscore-dangle */
import {
  Cartesian3,
  Color,
  CesiumTerrainProvider,
  UrlTemplateImageryProvider,
  Viewer,
} from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export default class Earth {
  constructor(id, { x = 0, y = 0, z = 1000 }) {
    this.viewer = new Viewer(id, {
      animation: false,
      fullscreenButton: false,
      vrButton: false,
      geocoder: false,
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      baseLayerPicker: false,
      homeButton: false,
      navigationHelpButton: false,
      sceneModePicker: false,
      imageryProvider: false,
    });

    this.viewer.scene.backgroundColor = Color.TRANSPARENT;
    this.viewer.camera.setView({
      destination: Cartesian3.fromDegrees(x, y, z),
    });
  }

  /**
   * 增加 google 影像
   */
  addGoogleMapLayer() {
    const googleMapProvider = new UrlTemplateImageryProvider({
      url: 'http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali',
    });
    this.viewer.imageryLayers.addImageryProvider(googleMapProvider);
  }

  /**
   * 加载地形数据
   */
  addTerrainLayer(url) {
    const terrainProvider = new CesiumTerrainProvider({
      // 正式部署时根据 env 文件更新前缀
      // url: 'http://localhost:3000/test/',
      url,
    });
    this.viewer.scene.terrainProvider = terrainProvider;
  }

  detectZoomLevel(distance) {
    const { tileProvider } = this.viewer.scene.globe._surface;
    const quadtree = tileProvider._quadtree;
    const drawingBufferHeight = this.viewer.canvas.height;
    const { sseDenominator } = this.viewer.camera.frustum;

    for (let level = 0; level <= 19; level += 1) {
      const maxGeometricError = tileProvider.getLevelMaximumGeometricError(level);
      const error = (maxGeometricError * drawingBufferHeight) / (distance * sseDenominator);
      if (error < quadtree.maximumScreenSpaceError) {
        return level;
      }
    }
    return null;
  }
}
