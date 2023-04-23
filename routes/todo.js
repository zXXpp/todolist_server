const express = require('express')
const expressJoi = require('@escook/express-joi')

const router = express.Router()
//处理函数引入
const todo = require('../routes_handler/todo/index')

//joi
const todo_schema = require('../schema/todo_schema')

router.post('/getTodoList', expressJoi(todo_schema.gettodolist_schema), todo.getTodoList)
router.post('/createTodo', expressJoi(todo_schema.create_schema), todo.create)

//暴露
module.exports = router
