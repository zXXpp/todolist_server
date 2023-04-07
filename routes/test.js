const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req);
    res.send('我是测试返回接口')
})


module.exports = router
