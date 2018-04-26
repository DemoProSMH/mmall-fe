/*
* @Author: 761591766@qq.com
* @Date:   2018-04-26 00:01:01
* @Last Modified by:   761591766@qq.com
* @Last Modified time: 2018-04-27 00:41:58
*/
'use strict';
var _mm = require('util/mm.js');

var _order = {
    // 获取商品列表
    getProductList: function(resolve, reject){
        _mm.request({
            url: _mm.getServerUrl('/order/get_order_cart_product.do'),
            success: resolve,
            error: reject
        });
    },
    // 提交订单
    creatOrder: function(orderInfo, resolve, reject){
        _mm.request({
            url: _mm.getServerUrl('/order/creat.do'),
            data: orderInfo,
            success: resolve,
            error: reject
        });
    }
}

module.exports = _order;