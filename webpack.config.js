const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
    entry: SRC_DIR + '/index.js',
    output: {
        path: DIST_DIR,
        filename: 'main.bundle.js',
        publicPath: '/'
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