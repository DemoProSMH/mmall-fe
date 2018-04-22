/*
* @Author: 761591766@qq.com
* @Date:   2018-04-14 00:17:33
* @Last Modified by:   761591766@qq.com
* @Last Modified time: 2018-04-21 23:17:41
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
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var templateBanner = require('./index.string');
// var navSide = require('page/common/nav-side/index.js');
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

// navSide.init({
//     name : 'order-list'
// });

$(function(){
    // 渲染banner的html
    var bannerHtml = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev')? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
})