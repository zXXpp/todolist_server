const TodoModel = require('../../model/TodoModel')

/**
 * 查询列表
 * @param {*} req 
 * @param {*} res 
 */
exports.getTodoList = async (req, res) => {
    try {
        const { pageSize, pageIndex } = req.body
        const totals = await TodoModel
            .find({ userId: req.auth.userId })
        const results = await TodoModel
            .find({ userId: req.auth.userId, status: 1 })
            .limit(pageSize)
            .skip(pageSize * (pageIndex - 1))
        res.res_con(results, { totals: totals.length })
    } catch (error) {
        res.res_error(error)
    }
}

/**
 * 创建todo
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (req, res) => {
    try {
        const todo = req.body
        await TodoModel.create({
            userId: req.auth.userId,
            content: todo.content,
            remind:{
                objectTime: todo.objectTime
            }
        })
        res.res_con()
    } catch (error) {
        res.res_error(error)
    }
}

/**
 * 更新todo
 * @param {*} req 
 * @param {*} res 
 */
exports.update = async (req, res) => {
    try {
        const { id, update: { status } } = req.body
        const result = await TodoModel.findByIdAndUpdate(id, { status, updateTime: new Date() })
        res.res_con()
    } catch (error) {
        res.res_error(error)
    }
}
