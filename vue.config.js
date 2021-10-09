'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// 端口号
const port = 8080
module.exports = {
  // 部署应用包时的基本 URL
  publicPath: './',
  // 项目打包输出目录
  outputDir: 'dist',
  // 项目静态文件打包输出目录
  assetsDir: 'static',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: { port: port, open: false, https: false, hotOnly: false },
  configureWebpack: {
    resolve: {
      // 配置快捷路径
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
