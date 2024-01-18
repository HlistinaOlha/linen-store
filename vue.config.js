const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/linen-store/" : "/",
  transpileDependencies: true,
  lintOnSave: false
})
