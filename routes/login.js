const express = require('express')

const router = express.Router()
const bodyParser = require('body-parser')
//JSON
const jsonParser = bodyParser.json()
//qs
const urlencodedParser = bodyParser.urlencoded()

const user = require('../routes_handler/user')
//注册
router.post('/register', jsonParser, user.register)
//登陆
router.post('/login', jsonParser, user.login)
//更新
router.post('/update', jsonParser, user.updateStatus)

module.exports = router
