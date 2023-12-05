const path = require('path');
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {library} = require('./dll.config')


module.exports = {
    context: __dirname,
    entry: {
      ...library
    },
    mode: 'development',
    output: {
      path: path.join(__dirname, 'dll'),
      filename: '[name].[chunkhash].dll.js',
      library: '[name]_[fullhash]',
    },
    resolve: {
      alias: {
        '@mui/styled-engine': '@mui/styled-engine-sc'
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DllPlugin({
        path: path.join(__dirname, "dll", "[name]-manifest.json"),
        name: '[name]_[fullhash]',
      }),
    ]
}