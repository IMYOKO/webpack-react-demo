const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.base.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 8806,
    inline: true,
    historyApiFallback: true
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'static'),
      to: path.resolve(__dirname, '/'),
      ignore: ['.*']
    }])
  ]
});