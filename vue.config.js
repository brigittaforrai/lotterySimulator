const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "lotterySimulator" : "/",
  outputDir: 'docs',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/variables.scss";
                         @import "~@/styles/mediaQueries.scss";`
      }
    }
  }
})