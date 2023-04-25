//导入用户模型
const UserModel = require('../../model/UserModel')


//获取用户信息
exports.getInfo = async (req, res) => {
    //响应
    try {
        const results = await UserModel.findById(req.auth.userId)
        const {
            nickName, email, sex, pic, phoneNumber
        } = results
        res.res_con({ nickName, email, sex, picUrl: pic, phoneNumber })
    } catch (error) {
        res.res_error(error)
    } finally {
    }
}

//更新用户信息
exports.updateInfo = async (req, res) => {
    try {
        const results = await UserModel.findByIdAndUpdate(req.auth.userId, { ...req.body, updateTime: new Date() })
        if(results){
            res.res_con()
        }else{
            res.res_error('修改失败')
        }
    } catch (error) {
        res.res_error(error)
    } finally {
    }
}
