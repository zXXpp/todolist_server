const express = require('express')
const router = express.Router()

const login = require('../src/login/index.js')
//注册
router.get('/register', (...re) => {
    login.register(...re)
})
//登陆
router.get('/login', (req, res) => {
    login.login(req, res)
})
//注销
router.get('/close', (req, res) => {
    login.close(req, res)

})

module.exports = router
