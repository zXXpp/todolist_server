const Joi = require('joi')
const pageIndex = Joi.number().min(1).required()
const pageSize = Joi.number().min(1).max(1000).required()
module.exports = {
    pageIndex,
    pageSize
}