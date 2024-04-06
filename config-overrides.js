const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add the fallback
  config.resolve.fallback = {
    ...config.resolve.fallback, // if you already have some fallbacks defined, spread them here
    buffer: require.resolve('buffer/'),
  };
  // Add plugin to provide Buffer globally
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  return config;
};
