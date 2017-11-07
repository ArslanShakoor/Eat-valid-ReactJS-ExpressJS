var path = require('path');
var webpack = require('webpack');
require('babel-core/register');
require('babel-polyfill');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: 'bundle',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,

        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './',
    proxy: {
      '/auth/google': {
        target: 'http://localhost:5000'
      },
      '/api/*': {
        target: 'http://localhost:5000'
      }
    }
  }
};
