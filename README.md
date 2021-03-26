# cesium-vue Google 影像 + terrain 地形图

## 项目安装

```sh
# 安装依赖
yarn install
# 解压 terrain 文件
cd terrain
tar -xzf test.tar.gz
```

### 项目启动

```sh
# 启动本地 terrain 静态资源服务
yarn serve-terrain
# 启动项目
yarn serve
```

### 项目打包

```sh
# terrain 文件需要手动部署至静态资源服务器, 增加对应的 3 个 headers 即可
# 产品打包
yarn build
```
