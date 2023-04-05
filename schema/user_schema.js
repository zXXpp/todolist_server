//导入joi
const joi = require('joi')

const email = joi.string().max(100).required()
const password = joi.string().min(6).max(20).required()

exports.reg_login_schema = {
  body: {
    email,
    password
  }
}

