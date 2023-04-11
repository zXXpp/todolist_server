const mongoose = require('../db/db')

/**
 * 用户表
 */
let UserSchema = new mongoose.Schema({
    nickName: {
        type: String,
        required: true,
        trim: true,//去掉前后空格
        //对象增强写法
        // set(){
        //      return ''
        // }

        //索引设置
        // index:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        default: '123456'
    }
    ,
    status: {
        type: Number,
        required: true,
        enum: [0, 1],//0停用，1启用
        default: 1
    },
    phoneNumber: {
        type: String,
        trim: true
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
    pic: {
        type:String,
        trim: true
    },
    createTime: {
        type: Date,
        required: true,
        default: new Date()
    },
    updateTime:{
        type:Date,
    }
})

//创建模型对象  :模型是用于操作这个数据的
let UserModel = mongoose.model('users', UserSchema, 'users')

// 封装查询
// 静态方法
// es5,es6封装异步方法
// UserSchema.static.findbyXXXId(sn,cb){

// }

// 实例方法
// UserSchema.methods.XXXX =function(){
//     return ''
// }


module.exports = UserModel