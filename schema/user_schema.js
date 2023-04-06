//导入joi
const Joi = require('joi');

exports.reg_login_schema = {
  body: {
    email: Joi.string().min(1).max(100).required(),
    nickName: Joi.string().required(),
    password: Joi.string().min(6).max(20).required(),
  }
}

