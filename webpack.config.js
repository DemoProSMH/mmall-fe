/*
* @Author: 761591766@qq.com
* @Date:   2018-04-14 00:49:22
* @Last Modified by:   761591766@qq.com
* @Last Modified time: 2018-04-14 01:24:11
*/
var config = {
    entry: {
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/login.js']
    },
    output: {
        path: './dist',
        filename: 'js/[name].js'
    },
    externals: {
        'jquery': 'window.jQuery'
    }
};

module.exports = config;