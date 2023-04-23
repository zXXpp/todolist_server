
const express = require('express')
const expressJoi = require('@escook/express-joi')

const router = express.Router()
//处理函数引入
const user = require('../routes_handler/user')


//joi
const user_schema = require('../schema/user_schema')

/**
 * 啊实打实大苏打
 * @route post /login/register
 * @group login - 登陆注册
 * @param {body} email.body.required - username or email - eg: user@domain
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/register', expressJoi(user_schema.reg_schema), user.register)
/**
 * 啊实打实大苏打
 * @route post /login/login
 * @group login
 * @param {string} email.body.required - username or email - eg: user@domain
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.post('/login', expressJoi(user_schema.login_schema), user.login)

//暴露
module.exports = router
