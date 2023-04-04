const { json } = require('express')
const db = require('../../db/db')
const mongoose = require('mongoose')

//结构
const { res_con, res_error, db_error } = require('../../utils')


//注册用户
exports.register = async (req, res) => {
    //响应
    try {
        await db()
        const {email,nickName,password} = req.body
        
        res.json(res_con())
    } catch (error) {
        res.json(res_error('1000', null, error))
    } finally {
        mongoose.disconnect()
    }
}
//登录
exports.login = (req, res) => {
    console.log(req);
    res.json(db_error())
}
// 更新数据
exports.updateStatus = (req, res) => {

}