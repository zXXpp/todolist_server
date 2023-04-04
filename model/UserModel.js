
const mongoose = require('mongoose')

//模型对象也可以拆分
let UserSchema = new mongoose.Schema({
    nickName: String,
    id: String,
    email: String,
    sex: Number
})

//创建模型对象  :模型是用于操作这个数据的
let UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel