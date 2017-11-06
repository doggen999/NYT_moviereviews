var path = require('path')
var webpack = require('webpack') // eslint-disable-line no-unused-vars

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-2'
          ]
        }
      }
    ]
  }
}
