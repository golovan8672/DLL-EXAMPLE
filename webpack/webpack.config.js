const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {library} = require('./dll.config')
const slash = require('slash');


module.exports = {
  context: __dirname,
  entry: `${process.cwd()}/src/index.js`,
  output: {
    path: path.resolve(process.cwd(), 'public'),
    filename: 'js/[name].js',
    publicPath: '',
  },
  plugins: [
    // ...Object.keys(library).map((name) => {
      //   return new webpack.DllReferencePlugin({
        //     context: __dirname,
        //     manifest: path.resolve(__dirname, 'dll', name+'-manifest'+'.json')
        //   })
        // }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.resolve(__dirname, './dll/react-manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: '../src/html/index.html',
    }),
    new AddAssetHtmlPlugin({
      glob: `${slash(path.resolve(__dirname, './dll'))}/react.70d4fe0ddf9500b5b4b5.dll.js`,
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  }
};
