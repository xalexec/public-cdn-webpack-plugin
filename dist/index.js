'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PublicCDNWebpackPlugin = function () {
  function PublicCDNWebpackPlugin(options) {
    (0, _classCallCheck3.default)(this, PublicCDNWebpackPlugin);

    this.options = isUndefined(options) ? [] : options;
  }

  (0, _createClass3.default)(PublicCDNWebpackPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      compiler.plugin('make', function (compilation, callback) {
        compilation.plugin('html-webpack-plugin-alter-asset-tags', function (pluginArgs, callback) {
          var contents = [];
          var body = [];
          var head = [];
          _this.options.forEach(function (option) {
            if (!option) return;
            var attributes = {};
            if (isString(option)) {
              attributes.src = option;
            } else if (isObject(option)) {
              attributes = option;
            }
            var content = {
              tagName: attributes.tagName ? attributes.tagName : 'script',
              closeTag: true,
              attributes: {}
            };
            if (attributes.tagName === 'script') {
              content.attributes.type = 'text/javascript';
            }
            if (attributes.tagName === 'link') {
              content.attributes.rel = 'stylesheet';
              content.selfClosingTag = !!pluginArgs.plugin.options.xhtml;
              delete content.closeTag;
            }
            if (attributes.innerHTML) {
              content.innerHTML = attributes.innerHTML;
              delete attributes.innerHTML;
            }
            delete attributes.tagName;
            (0, _assign2.default)(content.attributes, attributes);
            if (content.tagName !== 'script') {
              head.push(content);
            } else {
              contents.push(content);
            }
          });
          head = head.concat(pluginArgs.head);
          body = body.concat(pluginArgs.body);
          if (pluginArgs.plugin.options.inject === 'head') {
            head = contents.concat(head);
          } else {
            body = contents.concat(body);
          }
          callback(false, { body: body, head: head });
        });
        callback();
      });
    }
  }]);
  return PublicCDNWebpackPlugin;
}();

function isObject(obj) {
  return obj != null && Object.prototype.toString.call(obj) === '[object Object]';
}

function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

function isUndefined(obj) {
  return Object.prototype.toString.call(obj) === '[object Undefined]';
}

module.exports = PublicCDNWebpackPlugin;