var webpack = require('webpack');
var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: SRC_DIR + '/index.js',
    output: {
        path: DIST_DIR,
        filename: 'main.bundle.js',
        publicPath: '/assets/'
    },

    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loaders: ['babel-loader']
            }
        ]
    },
    // plugins: [new UglifyJsPlugin()]
};

module.exports = config;