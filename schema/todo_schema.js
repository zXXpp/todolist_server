const Joi = require('joi')

const { pageIndex, pageSize } = require('./paging_schema')

const content = Joi.string().min(1).max(500).required()
const objectTime = Joi.date()

exports.create_schema = {
    body: {
        content,
        objectTime
    }
}

exports.gettodolist_schema = {
    body: {
        pageIndex,
        pageSize
    }
}