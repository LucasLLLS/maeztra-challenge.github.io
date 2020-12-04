const webpack = require('webpack');

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-sprite-loader'
    });
    return config;
  },
}