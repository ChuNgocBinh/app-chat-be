const jwt = require("jsonwebtoken")

const createResponse = (res, status, statusCode = 200, data, message) => {
    let code
    if (status) {
        code = 200
    } else {
        code = statusCode
    }

    res.status(code).send({
        status: status ? 'success' : 'error',
        data,
        message
    })
}

const syncToken = (data) => {
    const token = jwt.sign(data, 'chat_app_demo', {
        expiresIn: '1d'
    })
    return token
}

const verifyToken = (token) => {
    const data = jwt.verify(token, 'chat_app_demo')
    return data
}

module.exports = {
    createResponse,
    syncToken,
    verifyToken
}