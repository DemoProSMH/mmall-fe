/*
* @Author: 761591766@qq.com
* @Date:   2018-04-22 22:33:16
* @Last Modified by:   761591766@qq.com
* @Last Modified time: 2018-04-23 00:10:38
*/
'use strict';

require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _mm = require('util/mm.js');
var _product = require('service/product-service.js');
var _cart = require('service/cart-service.js');
var templateIndex = require('./index.string');

var page = {
    data: {
        productId: _mm.getUrlParam('productId') || ''
    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function(){
        // 如果没有传productId，自动跳回首页
        if(!this.data.productId){
            _mm.goHome();
        }
        this.loadDetail();
    },
    bindEvent: function(){
        var _this = this;
    },
    // 加载商品详情的数据
    loadDetail: function(){
        var _this = this,
            html = '',
            $pagewrap = $('.page-wrap');
        // loading
        $pagewrap.html('<div class="loading"></div>');
        // 请求detail地址信息
        _product.getProductDetail(this.data.productId, function(res){
            _this.filter(res);
            html = _mm.renderHtml(templateIndex, res);
            $('.page-wrap').html(html);
        }, function(errMsg){
            $('.page-wrap').html('<p class="err-tip">此商品太淘气，找不到了</p>');
        });
    },
    // 数据匹配
    filter: function(data){
        data.subImages = data.subImages.split(',');
    }
}

$(function(){
    page.init();
});





