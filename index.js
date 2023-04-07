const { jwtConfig: { jwtSecretKey, jwtAlgorithm } } = require('./config/config')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { expressjwt } = require('express-jwt')
const joi = require('joi')



//数据库
const db = require('./db/db')


//app
const app = express()

//官方中间件
app.use(cors())//跨域
app.use(express.json())//query参数解析
app.use(express.urlencoded({ extended: true }))//body参数解析

//自定义中间件
app.use(require('./middleware/response')())



app.use(expressjwt({ secret: jwtSecretKey, algorithms: [jwtAlgorithm] }).unless({ path: [/^\/user/] }))



//子路由注册
app.use('/test', require('./routes/test.js'))
app.use('/user', require('./routes/login.js'))







//兜底
app.all('*', (req, res) => {
    res.statusCode = 404
    res.json({
        code: '404',
        msg: '暂无此接口，请联系作者：1492548812@qq.com'
    })
})
//全局捕获的错误级别中间件
app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError) return res.res_error(err)
    if (err.name === 'UnauthorizedError') return res.res_error('身份认证失败', '401')
})
//启动监听器
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