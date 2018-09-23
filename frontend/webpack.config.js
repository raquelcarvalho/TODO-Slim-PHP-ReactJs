const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/public',
    filename: './app.js',
  },
  devServer: {
    port: 8000,
    contentBase: './public',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules',
    },
  },
  plugins: [new ExtractTextPlugin('app.css')],
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'es2017', 'react'],
        plugins: [
          'transform-runtime',
          'transform-decorators-legacy',
          'transform-class-properties',
          'transform-object-rest-spread',
          'transform-async-to-generator'
        ]
      }
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
      loader: 'url-loader?importLoaders=1&limit=100000'
    },
    ],
  },
};
