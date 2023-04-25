const Joi = require('joi')

const { pageIndex, pageSize } = require('./paging_schema')

const content = Joi.string().min(1).max(500).required()
const objectTime = Joi.date()
const id = Joi.string().required()
const status  = Joi.number().valid(1, 2)

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

exports.update_schema = {
    body:{
        id,
        update:{
            status,
        }
    }
}