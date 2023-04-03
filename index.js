const express = require('express')
const cors = require('cors')
const login = require('./routes/login.js')


const app = express()
app.use(cors())
//测试接口
app.use(require('./routes/test.js'))
//登陆，注册
app.use('/login', login)




app.all('*', (req, res) => {
    res.statusCode = 404
    res.json({
        code: '404',
        msg: '暂无此接口，请联系作者：1492548812@qq.com'
    })
})
app.listen(9000, () => {
    console.log('nodejs后端启动成功');
})