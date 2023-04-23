/**
 * 
 * @returns res封装的函数
 */
module.exports = () => {
    return (req, res, next) => {
        /**
         * 
         * @param {*} code '0000'是成功
         * @param {*} msg 消息描述
         * @param {*} data 返回数据体
         */
        res.res_error = (msg = '服务器错误', code = '1000', data = null) => {
            res.json({
                code,
                data,
                msg: msg instanceof Error ? msg.message : msg
            })
        }
        /**
         * 
         * @param {*} data 数据体
         * @param {*} code '0000'
         * @param {*} msg ''
         */
        res.res_con = (data = null, utils, code = '0000', msg = 'ok',) => {
            res.json({
                code,
                data,
                msg: msg instanceof Error ? msg.message : msg,
                ...utils
            })
        }
        next()
    }
}