const through = require('through2')
const blogger = require('blogger-save-theme')
const gutil = require('gulp-util')

const PluginError = gutil.PluginError
const PLUGIN_NAME = 'gulp-blogger-save-theme'

module.exports = ({
  blogID,
  authuser = 0,
  xGWTPermutation,
  xsrf,
  cookie: {HSID, SID, SSID}
}) => {
  return through.obj(async (file, encoding, callback) => {
    if (file.isNull()) {
      return callback(null, file)
    }
    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'))
    }

    try {
      const {error, result} = await blogger({
        blogID,
        authuser,
        theme: String(file.contents),
        xGWTPermutation,
        xsrf,
        cookie: {HSID, SID, SSID}
      })

      if (error) {
        return callback(new PluginError(PLUGIN_NAME, JSON.stringify(error)))
      }

      file.contents = Buffer.from(result['1'])
      callback(null, file)
    } catch (err) {
      callback(new PluginError(PLUGIN_NAME, err))
    }
  })
}
