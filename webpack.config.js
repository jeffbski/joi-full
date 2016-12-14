'use strict';

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'Joi',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: __dirname + '/dist',
    filename: 'joi-full.js'
  },
  module: {
    loaders: [
      {
        // need to babelify joi, joi-date-extensions, isemail, hoek, and topo's lib
        test: /[\\\/]node_modules[\\\/](joi[\\\/]lib[\\\/]|joi-date-extensions[\\\/]lib[\\\/]|isemail[\\\/]lib[\\\/]|hoek[\\\/]lib[\\\/]|topo[\\\/]lib[\\\/])/,
        loader: 'babel'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  node: {
    global: false,
    crypto: 'empty',
    net: 'empty',
    dns: 'empty'
  },
  externals: {
    "moment": "moment"
  }
};
