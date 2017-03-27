PublicCDNWebpackPlugin
====

[![npm version](https://img.shields.io/npm/v/public-cdn-webpack-plugin.svg)](https://www.npmjs.org/package/public-cdn-webpack-plugin)

## 概述

PublicCDNWebpackPlugin 是一个 webpack 插件，作用是将 CDN js,css 打包到 index.html 中去，免去手工的麻烦。

## 依赖

该插件依赖 HtmlWebpackPlugin 并，使用他的一些配置，如 inject，xhtml 选项

## 文档

`npm install --save-dev public-cdn-webpack-plugin`

````
const PublicCDNWebpackPlugin = require('PublicCDNWebpackPlugin')

const cdn = [
  'https://cdn.bootcss.com/vue/2.1.10/vue.min.js',
  'https://cdn.bootcss.com/vuex/2.1.2/vuex.min.js',
  'https://cdn.bootcss.com/vue-router/2.2.0/vue-router.min.js',
  'https://cdn.staticfile.org/jquery/3.1.1/jquery.min.js',
  'https://cdn.staticfile.org/fastclick/1.0.6/fastclick.min.js',
  'https://cdn.bootcss.com/vee-validate/2.0.0-beta.22/vee-validate.min.js',
  'https://cdn.bootcss.com/cropper/3.0.0-alpha.1/cropper.min.js',
  'https://cdn.bootcss.com/countup.js/1.8.1/countUp.min.js',
  'https://cdn.staticfile.org/photoswipe/4.1.1/photoswipe.min.js',
  'https://cdn.bootcss.com/store2/2.5.0/store2.min.js',
  'https://res.wx.qq.com/open/js/jweixin-1.2.0.js',
  {
    src: 'https://cw34ffw2.qnssl.com/fundebug.0.0.4.min.js',
    apikey: 'testkey'
  },
  'https://map.qq.com/api/js?v=2.exp',
  'http://imgcache.qq.com/tencentvideo_v1/tvp/js/tvp.player_v2.js'
  {
    tagName: 'link',
    href: 'http://www.qq.com'
  },
  {
    tagName: 'script',
    innerHTML: '(function(){})()'
  },
  // 虽然可以，但不推荐
  {
    tagName: 'title',
    innerHTML: 'test'
  }
]

new CDNWebpackPlugin(config.build.cdn)

````

## License
The MIT License(http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, alex <xalexec@gmail.com>

请自由地享受和参与开源

## 贡献

如果你有好的意见或建议，欢迎给我们提issue或pull request，为提升微信web体验贡献力量
