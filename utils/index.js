/**
 * 
 * @param {*} code code码
 * @param {*} data 数据体
 * @param {*} msg 信息描述
 * @returns 
 */
const mongoose = require('mongoose')

exports.res_con = (data = null, code = '0000', msg = 'ok') => {
    return {
        code,
        data,
        msg
    }
}

exports.db_error = (data = null, code = '1000', msg = '数据库错误') => {
    return {
        code,
        data,
        msg
    }
}

exports.res_error = (msg = '服务器错误', data = null, code = '1000') => {
    return {
        code,
        data,
        msg
    }
}
exports.db_disconnect = async () => {
    try {
        await mongoose.disconnect()
        console.log('断开成功');
    } catch (error) {
        console.log('断开失败');
    }
}



