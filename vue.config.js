const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false
})

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  }
}