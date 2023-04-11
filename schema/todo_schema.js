const Joi = require('joi')
const content = Joi.string().min(1).max(500).required()
const objectTime = Joi.date().required()

exports.create_schema = {
    body: {
        content,
        objectTime
    }
}