const webpack = require('webpack');
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: "./dist"
  },
  plugins: [
    new webpack.DefinePlugin({
      AUDIOSERVE_DEVELOPMENT: JSON.stringify(true)
    })
  ]
});