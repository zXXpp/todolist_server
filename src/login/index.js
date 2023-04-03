const admin = require('../../admin.json')
function register(req, res) {
    res.json({
        code: '0000',
        data: { id: 1 },
        msg: ''
    })
}
function login(req, res) {
}
function close(req, res) {
}

module.exports = {
    register,
    login,
    close,
}