const path = require('path'); // Meant for node have to use const

module.exports = {
  context: __dirname,
  entry: "./index.js",
  devtool: "cheap-eval-source-map",
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
    }]
  }
}