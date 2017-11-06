var prodConfig = require('./webpack.prod.js')
var merge = require('webpack-merge')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(prodConfig, {
  plugins: [new BundleAnalyzerPlugin()]
})
