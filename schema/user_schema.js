//导入joi
const Joi = require('joi');

//用户邮箱
const email = Joi.string().email().min(1).max(100).required()
//用户昵称
const nickName = Joi.string().required()
//用户密码
const password = Joi.string().min(6).max(20).required()





exports.reg_schema = {
  body: {
    email,
    nickName,
    password
  }
}

exports.login_schema = {
  body: {
    email,
    password
  }
}

