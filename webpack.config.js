const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'remove-comment-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: ['node_modules', './loaders/']
  }
}