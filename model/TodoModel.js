const mongoose = require('../db/db')

//模型对象也可以拆分
let TodoSchema = new mongoose.Schema({
    nickName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        default: '123456'
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1],
        default: 1
    },
    phoneNumber: {
        type: String,
    },
    wxid: {
        type: String,
    },
    sex: {
        type: Number,
        required: true,
        enum: [0, 1, 3],//0女，1男，3未知
        default: '3'
    },
    pic: String,

})

//创建模型对象  :模型是用于操作这个数据的
let TodoModel = mongoose.model('todos', TodoSchema,'todos')
module.exports = TodoModel