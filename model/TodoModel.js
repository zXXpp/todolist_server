const { object } = require('joi')
const mongoose = require('../db/db')

//模型对象也可以拆分
let TodoSchema = new mongoose.Schema({
    //所属用户的关联id
    userId: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1, 2],//1是未完成,0是删除,2是已完成
        default: 1
    },
    createTime: {
        type: Date,
        default: Date.now,
        required: true,
    },
    updateTime: {
        type: Date,
    },
    content: {
        type: String,
        minLength: 1,
        maxLength: 500,
        required: true
    },
    remind: {
        objectTime: {
            type: Date,
            required: true
        },
        objectType: {
            type: String
        },
        //闹钟
        alarmClock: {
            type: Date,
        },
        //重复提醒
        reAlarmClock: {
            reType: {
                type: String,
                enum: ['day', 'week', 'month', 'year', 'workDay', 'custom']
            },
            customType: {
                type: String,
                enum: ['day', 'week', 'month', 'year']
            },
            customCount: {
                type: Number,
                min: 1,
                max: 999
            }
        }
    },
    remark: {
        type: String,
        trim: true
    },
    attachment: {
        type: Array,
    }

})

//创建模型对象  :模型是用于操作这个数据的
let TodoModel = mongoose.model('todos', TodoSchema, 'todos')
module.exports = TodoModel