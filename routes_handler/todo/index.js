const TodoModel = require('../../model/TodoModel')

/**
 * 创建todo
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async(req,res)=>{
    console.log(req.body);
    res.res_con()
}