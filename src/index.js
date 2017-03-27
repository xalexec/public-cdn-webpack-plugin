/**
 * Created by alex on 2017/2/22.
 */

class PublicCDNWebpackPlugin {
  constructor (options) {
    this.options = isUndefined(options) ? [] : options
  }

  apply (compiler) {
    compiler.plugin('make', (compilation, callback) => {
      compilation.plugin('html-webpack-plugin-alter-asset-tags', (pluginArgs, callback) => {
        let contents = []
        let body = []
        let head = []
        this.options.forEach((option) => {
          if (!option) return
          let attributes = {}
          if (isString(option)) {
            attributes.src = option
          } else if (isObject(option)) {
            attributes = option
          }
          let content = {
            tagName: attributes.tagName ? attributes.tagName : 'script',
            closeTag: true,
            attributes: {}
          }
          if (attributes.tagName === 'script') {
            content.attributes.type = 'text/javascript'
          }
          if (attributes.tagName === 'link') {
            content.attributes.rel = 'stylesheet'
            content.selfClosingTag = !!pluginArgs.plugin.options.xhtml
            delete content.closeTag
          }
          if (attributes.innerHTML) {
            content.innerHTML = attributes.innerHTML
            delete attributes.innerHTML
          }
          delete attributes.tagName
          Object.assign(content.attributes, attributes)
          if (content.tagName !== 'script') {
            head.push(content)
          } else {
            contents.push(content)
          }
        })
        head = head.concat(pluginArgs.head)
        body = body.concat(pluginArgs.body)
        if (pluginArgs.plugin.options.inject === 'head') {
          head = contents.concat(head)
        } else {
          body = contents.concat(body)
        }
        callback(false, { body, head })
      })
      callback()
    })
  }
}

function isObject (obj) {
  return obj != null && Object.prototype.toString.call(obj) === '[object Object]'
}

function isString (obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

function isUndefined (obj) {
  return Object.prototype.toString.call(obj) === '[object Undefined]'
}

module.exports = PublicCDNWebpackPlugin
