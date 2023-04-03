const express = require('express')
const base = require('./routes/base.js')
const app = express()

app.use(base)




app.all('*', (req, res) => {
    res.statusCode = 404
    res.send('暂无此接口，请联系开发者：zxxpp')
})
app.listen(9000, () => {
    console.log('nodejs后端启动成功');
})