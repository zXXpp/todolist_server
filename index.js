const express = require('express')
const db = require('./db/db')
const mongoose = require('mongoose')



//跨域
const cors = require('cors')

//子路由
const user = require('./routes/login.js')




const app = express()
app.use(cors())
app.use(require('./routes/test.js'))
app.use('/user', user)




app.all('*', (req, res) => {
    res.statusCode = 404
    res.json({
        code: '404',
        msg: '暂无此接口，请联系作者：1492548812@qq.com'
    })
})
app.listen(9000, () => {
    db().then(() => {
        console.log('首次连接成功');
    }).finally(
        mongoose.disconnect().then(() => {
            console.log('首次断开成功');
        })
    )
    console.log('nodejs后端启动成功');
})