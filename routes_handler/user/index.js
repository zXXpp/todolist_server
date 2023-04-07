const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const db = require('../../db/db')
const jwt = require('jsonwebtoken')

//导入用户模型
const UserModel = require('../../model/UserModel')
//jwt加密字符串
const { jwtConfig: { jwtSecretKey, jwtExpiresIn, jwtAlgorithm } } = require('../../config/config')


//注册用户
exports.register = async (req, res) => {
    //响应
    try {
        const userInfo = req.body
        const { email, nickName, password } = userInfo
        if (nickName === 'admin') {
            return res.res_error('禁止注册超级管理员')
        }
        //合法性校验
        if (!email.length || !password) {
            return res.res_error('请输入正确的邮箱和密码')
        }
        await db()
        //判断是否占用
        const data1 = await UserModel.find({ email })
        if (data1.length > 0) {
            return res.res_error('邮箱已注册', null, { errorType: 'email' })
        }
        // const data2 = await UserModel.find({ password })
        // if (data2.length > 0) {
        //     return res.json(res_error('密码已被人使用', { errorType: 'password' }))
        // }
        //加密密码
        userInfo.password = bcrypt.hashSync(password, 10, { algorithm: 'HS256' })
        //插入数据库
        await UserModel.create({
            email: userInfo.email,
            password: userInfo.password,
            nickName: userInfo.nickName,
            status: 1
        })
        return res.res_con()
    } catch (error) {
        res.res_error(error)
    } finally {
        res.db_disconnect()
    }
}
//登录
exports.login = async (req, res) => {
    try {
        let userInfo = req.body
        await db()
        const results = await UserModel.find({ email: userInfo.email })
        if (results.length !== 1) return res.res_error('未注册账号')
        if (!bcrypt.compareSync(userInfo.password, results[0].password)) return res.res_error('密码错误')
        //剔除部分属性
        const { nickName, email, pic, _id } = results[0]
        const user = { nickName, email, pic, _id }
        //生产token
        const token = `Bearer ${jwt.sign(user, jwtSecretKey, { expiresIn: jwtExpiresIn, algorithm: jwtAlgorithm })}`
        res.res_con({ token })
    } catch (error) {
        res.res_error(error)
    } finally {
        res.db_disconnect()
    }
}
// 更新数据
exports.updateStatus = (req, res) => {

}