/**
 * 
 * @param {*} success 连接成功的回调
 * @param {*} error 失败的回调
 */
module.exports = function () {
    const mongoose = require('mongoose')
    /**
     * mongoose7用的promise风格
     * 6是注册回调
     */
    //连接服务 mongodb协议  数据库名称
    //导入配置文件
    const { DBHOST, DBPORT, DBNAME } = require('../config/config')
    return mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`).then(() => {
        console.log('默认输出数据库连接成功');
        return Promise.resolve()
    }, (error) => {
        console.log('默认输出数据库连接失败了', error);
        return Promise.reject(error)
    })
}