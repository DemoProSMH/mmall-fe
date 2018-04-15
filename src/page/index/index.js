/*
* @Author: 761591766@qq.com
* @Date:   2018-04-14 00:17:33
* @Last Modified by:   761591766@qq.com
* @Last Modified time: 2018-04-15 18:50:12
*/

// var cats = require('./cats');
// console.log(cats);

'use strict';

// var $ = require('jquery');
// var $$ = require('jquery');

// $$('body').html('HELLO to INDEX ~~~~~');

// console.log('hello index');

// require('./index.css');
// require('../module.js');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');

// // 数据请求
// _mm.request({
//     url : '/product/list.do?keyword=1',
//     success: function(res){
//         console.log(res);
//     },
//     error: function(err){
//         console.log(err);
//     }
// })

// // 获取请求参数
// console.log(_mm.getUrlParam('test'));

// // 渲染模板
// var html = '<div>{{data}}</div>';
// var data = {
//     data : 123
// }
// console.log(_mm.renderHtml(html,data));

navSide.init({
    name : 'order-list'
});