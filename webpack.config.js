/*
* @Author: 761591766@qq.com
* @Date:   2018-04-14 00:49:22
* @Last Modified by:   Minhong Shen
* @Last Modified time: 2018-04-14 16:59:44
*/
var webpack = require('webpack');

var config = {
    entry: {
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/login.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    externals: {
        'jquery': 'window.jQuery'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/base.js'
        })
    ]
};

module.exports = config;