const express = require('express')
//router就是一个小号的app
const router = express.Router()

router.get('/test', (req, res) => {
    console.log('响应了');
    res.send('我是测试返回接口')
})
module.exports = router
