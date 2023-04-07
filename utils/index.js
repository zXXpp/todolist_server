const mongoose = require('mongoose')
/**
 * 
 * @param {*} data 数据体
 * @param {*} code 
 * @param {*} msg 
 * @returns 
 */
const db_disconnect = async () => {
    try {
        await mongoose.disconnect()
        console.log('断开成功');
    } catch (error) {
        console.log('断开失败');
    }
}
exports.db_disconnect



