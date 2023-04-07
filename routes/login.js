const express = require('express')
const expressJoi = require('@escook/express-joi')

const router = express.Router()
//处理函数引入
const user = require('../routes_handler/user')


//joi
const user_schema = require('../schema/user_schema')

//注册
router.post('/register', expressJoi(user_schema.reg_schema), user.register)
//登陆
router.post('/login', expressJoi(user_schema.login_schema), user.login)

//暴露
module.exports = router
