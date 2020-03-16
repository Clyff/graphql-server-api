'use-strict'

import { CleanWebpackPlugin } from'clean-webpack-plugin';
import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import path from 'path';

module.exports = {
  devtool: 'source-map',
  entry: [path.join(__dirname, 'server.js')],
  externals: [nodeExternals({})],
  mode: 'production',
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.js$/,
        use: 'js-loader'
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.js']
  },
  target: 'node'
};
