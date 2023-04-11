const express = require('express')
const expressJoi = require('@escook/express-joi')

const router = express.Router()
//处理函数引入
const info = require('../routes_handler/user/info')


const user_schema = require('../schema/user_schema')


//获取用户信息
router.get('/getUserInfo', info.getInfo)
//更新用户信息
router.post('/updateUserInfo',expressJoi(user_schema.update_schema), info.updateInfo)

//暴露
module.exports = router
