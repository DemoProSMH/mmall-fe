/*
* @Author: 761591766@qq.com
* @Date:   2018-04-25 23:57:07
* @Last Modified by:   761591766@qq.com
* @Last Modified time: 2018-05-05 00:27:34
*/
'use strict';

require('./index.css');
require('page/common/header/index.js');
require('page/common/nav/index.js');
var _mm = require('util/mm.js');
var _order = require('service/order-service.js');
var _address = require('service/address-service.js');
var templateAddress = require('./address-list.string');
var templateProduct = require('./product-list.string');
var addressModal = require('./address-modal.js');

var page = {
    data: {
        selectedAddressId: null
    },
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function(){
        this.loadAddressList();
        this.loadProductList();
    },
    bindEvent: function(){
        var _this = this;
        // 地址的选择
        $(document).on('click', '.address-item', function(){
            $(this).addClass('active').siblings('.address-item').removeClass('active');
            _this.data.selectedAddressId = $(this).data('id');
        });
        // 订单的提交
        $(document).on('click', '.order-submit', function(){
            var shippingId = _this.data.selectedAddressId;
            if(shippingId){
                _order.creatOrder({
                    shippingId: shippingId
                }, function(res){
                    window.location.href = './oayment.html?orderNumber=' + orderNo;
                }, function(errMsg){
                    _mm.errorTips(errMsg);
                });
            }
            else{
                _mm.errorTips('请选择地址后再提交');
            }
        });
        // 地址的添加
        $(document).on('click', '.address-add', function(){
            addressModal.show({
                isUpdate: false,
                onSuccess: function(){
                    _this.loadAddressList();
                }
            });
        });
        // 地址的编辑
        $(document).on('click', '.address-update', function(){
            var shippingId = $(this).parents('.address-item').data('id');
            _address.getAddress(shippingId, function(res){
                addressModal.show({
                    isUpdate: true,
                    data: res,
                    onSuccess: function(){
                        _this.loadAddressList();
                    }
                })
            }, function(errMsg){
                _mm.errorTips(errMsg);
            });
        });
    },
    // 加载地址列表
    loadAddressList: function(){
        var _this = this;
        // 获取地址列表
        _address.getAddressList(function(res){
            var addressListHtml = _mm.renderHtml(templateAddress, res);
            $('.address-con').html(addressListHtml);
        }, function(errMsg){
            $('.address-con').html('<p class="err-tip">地址加载失败，请刷新后重试</p>')
        });
    },
    // 加载商品清单
    loadProductList: function(){
        var _this = this;
        // 获取地址列表
        _order.getProductList(function(res){
            var productListHtml = _mm.renderHtml(templateProduct, res);
            $('.product-con').html(productListHtml);
        }, function(errMsg){
            $('.address-con').html('<p class="err-tip">商品加载失败，请刷新后重试</p>')
        });
    }
}

$(function(){
    page.init();
});