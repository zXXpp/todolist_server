const mongoose = require('mongoose')
const db = require('../../db/db')

//导入用户模型
const UserModel = require('../../model/UserModel')
//结构
const { res_con, res_error, db_error } = require('../../utils')


//注册用户
exports.register = async (req, res) => {
    //响应
    try {
        await db()
        const { email, nickName, password } = req.body
        const data1 = await UserModel.find({ email })
        if (data1.length) {
            res.json(res_error('邮箱已被注册', { errorType: 'email' }))
            return
        }
        const data2 = await UserModel.find({ password })
        if (data2.length) {
            res.json(res_error('密码已被人使用', { errorType: 'password' }))
            return
        }
        await UserModel.create({
            email, nickName, password, status: 1
        })
        res.json(res_con())
    } catch (error) {
        res.json(res_error(error.toString(), '1000', null))
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