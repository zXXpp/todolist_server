const mongoose = require('mongoose')


const { dbConfig: { DBHOST, DBPORT, DBNAME } } = require('../config/config')
mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`).then(() => {
    console.log('默认输出数据库连接成功');
    return Promise.resolve()
}, (error) => {
    console.log('默认输出数据库连接失败了', error);
    return Promise.reject(error)
})
module.exports = mongoose
