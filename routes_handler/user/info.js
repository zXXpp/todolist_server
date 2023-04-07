const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const db = require('../../db/db')
const jwt = require('jsonwebtoken')

//导入用户模型
const UserModel = require('../../model/UserModel')


//注册用户
exports.getInfo = async (req, res) => {
    //响应
    try {
        console.log(req.auth);
        await db()
        const results = await UserModel.findById(req.auth._id)
        const {
            nickName, email, sex
        } = results
        res.res_con({ nickName, email, sex })
    } catch (error) {
        res.res_error(error)
    } finally {
        res.db_disconnect()
    }
}

//更新用户信息
exports.updateInfo = async (req, res) => {
    try {
        await db()
        const result = UserModel.findById(req.auth._id)
        console.log(result);
    } catch (error) {
        res.res_error(error)
    } finally {
        res.db_disconnect()
    }
}
