var HtmlConverter = require('quill-delta-to-html').QuillDeltaToHtmlConverter

var defaultOpts = {}

module.exports.tohtml = (contents, opts) => {
  opts = Object.assign(defaultOpts, opts)

  var converter = new HtmlConverter(contents, opts)
  return converter.convert()
}