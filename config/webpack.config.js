'use strict';

const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// Merge webpack configuration files
const config = merge(common, {
  entry: {
    'mini-weibo': PATHS.src + '/mini-weibo.js',
    background: PATHS.src + '/background.js',
  },
});

module.exports = config;
