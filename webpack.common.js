/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/public/'),
          to: path.resolve(__dirname, './dist/'),
        },
      ],
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
      cleanOnceBeforeBuildPatterns: ['**/*', '!.git/**'],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, './src/scripts/sw.js'),
    }),
  ],
};