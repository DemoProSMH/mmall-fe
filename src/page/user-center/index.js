/*
* @Author: 761591766@qq.com
* @Date:   2018-04-21 10:25:35
* @Last Modified by:   761591766@qq.com
* @Last Modified time: 2018-04-21 12:56:56
*/

'use trict';

require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
var _user = require('service/user-service.js');
var templateIndex = require('./index.string');

// 配置逻辑部分
var page = {
    init: function(){
        this.onLoad();
    },
    onLoad: function(){
        // 初始化左侧菜单
        navSide.init({
            name: 'user-center'
        });
        // 加载用户信息
        this.loadUserInfo();
    },
    // 加载用户信息
    loadUserInfo: function(){
        var userHtml = '';
        _user.getUserInfo(function(res){
            userHtml = _mm.renderHtml(templateIndex,res);
            $('.panel-body').html(userHtml);
        }, function(errMsg){
            _mm.errorTips(errMsg);
        });
    }
};

$(function(){
    page.init();
});
