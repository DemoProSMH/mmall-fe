/*
* @Author: 761591766@qq.com
* @Date:   2018-04-15 20:50:19
* @Last Modified by:   761591766@qq.com
* @Last Modified time: 2018-04-15 21:22:53
*/
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm = require('util/mm.js');

$(function(){
    var type = _mm.getUrlParam('type') || 'default',
        $element = $('.' + type + '-success');
    // 显示对应的提示元素
    $element.show();
})