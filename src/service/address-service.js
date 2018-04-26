/*
* @Author: 761591766@qq.com
* @Date:   2018-04-26 23:44:54
* @Last Modified by:   761591766@qq.com
* @Last Modified time: 2018-04-27 00:00:30
*/
'use strict';

var _mm = require('util/mm.js');

var _address = {
    // 获取地址列表
    getAddressList: function(resolve, reject){
        _mm.request({
            url: _mm.getServerUrl('/shipping/list.do'),
            data: {
                pageSize: 50
            },
            success: resolve,
            error: reject
        });
    }

}

module.exports = _address;