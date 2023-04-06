const mongoose = require('mongoose')



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
        res.res_con = (data = null, code = '0000', msg = 'ok') => {
            res.json({
                code,
                data,
                msg: msg instanceof Error ? msg.message : msg
            })
        }
        res.db_disconnect = async () => {
            try {
                await mongoose.disconnect()
                console.log('断开成功');
            } catch (error) {
                console.log('断开失败');
            }
        }
        next()
    }
}