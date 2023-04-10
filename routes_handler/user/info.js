const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const db = require('../../db/db')
const jwt = require('jsonwebtoken')

//导入用户模型
const UserModel = require('../../model/UserModel')


//获取用户信息
exports.getInfo = async (req, res) => {
    //响应
    try {
        console.log(req.auth);
        await db()
        const results = await UserModel.findById(req.auth._id)
        const {
            nickName, email, sex, pic, phoneNumber
        } = results
        res.res_con({ nickName, email, sex, picUrl: pic, phoneNumber })
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
        const results = await UserModel.findByIdAndUpdate(req.auth._id,{...req.body})
        res.res_con()
    } catch (error) {
        res.res_error(error)
    } finally {
        res.db_disconnect()
    }
}
