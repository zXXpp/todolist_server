const express = require('express')
const expressJoi = require('@escook/express-joi')

const router = express.Router()
//处理函数引入
const user = require('../routes_handler/user')


//joi
const { reg_login_schema } = require('../schema/user_schema')

//注册
router.post('/register', expressJoi(reg_login_schema), user.register)
//登陆
router.post('/login', user.login)
//更新
router.post('/update', user.updateStatus)

//暴露
module.exports = router
