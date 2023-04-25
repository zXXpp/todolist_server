
const express = require('express')

const expressJoi = require('@escook/express-joi')
const router = express.Router()
//处理函数引入
const user = require('../routes_handler/user')
//joi
const user_schema = require('../schema/user_schema')
/**
@swagger
 * /user/register:
 *    post:
 *      summary: 注册用户
 *      tags: [登陆注册]
 *      description: 注册用户
 *      parameters:
 *        - in: body
 *          name: body
 *          schema:
 *            type: object
 *            required: [email,nickName,password]
 *            description: user's credential
 *            properties:
 *              email:
 *                type: string
 *              nickName:
 *                type: string
 *              password:
 *                type: string
 *                minLength: 6
 *      responses:
 *        200:
 *          description: OK
 */
router.post('/register', expressJoi(user_schema.reg_schema), user.register)

router.post('/login', expressJoi(user_schema.login_schema), user.login)

module.exports = router
