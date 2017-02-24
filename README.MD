PublicCDNWebpackPlugin  
====

[![npm version](https://img.shields.io/npm/v/public-cdn-webpack-plugin.svg)](https://www.npmjs.org/package/public-cdn-webpack-plugin)


[中文文档](https://github.com/xalexec/PublicCDNWebpackPlugin/README_zh-cn.md)

## Intro

PublicCDNWebpackPlugin is a webpack plugin，make the CDN js,css inject to index.html 

## Dependencies

This plugin depend on HtmlWebpackPlugin ，and use it some optios, like inject and xhtml

## Documentation

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
  // not recommend
  {
    tagName: 'title',
    innerHTML: 'test'
  }
]

new CDNWebpackPlugin(config.build.cdn)

````

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an issue or a pull request.

## License

The MIT License(http://opensource.org/licenses/MIT)
Copyright (c) 2017-present, alex <xalexec@gmail.com>
