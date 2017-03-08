import _Object$assign from 'babel-runtime/core-js/object/assign';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

var CDNWebpackPlugin = function () {
  function CDNWebpackPlugin(options) {
    _classCallCheck(this, CDNWebpackPlugin);

    this.options = isUndefined(options) ? [] : options;
  }

  _createClass(CDNWebpackPlugin, [{
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
            _Object$assign(content.attributes, attributes);
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

  return CDNWebpackPlugin;
}();

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

function isUndefined(obj) {
  return Object.prototype.toString.call(obj) === '[object Undefined]';
}

module.exports = CDNWebpackPlugin;