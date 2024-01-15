const moment = require('moment')
const { userRepository } = require('../repository')
const { createResponse, syncToken } = require('../utility/utility')
const { code } = require('../utility/common')
const { v4: uuidv4 } = require('uuid');

const signup = async (req, res, next) => {
    const { username, password } = req.body
    const isExisted = await userRepository.getUser(username)
    if (isExisted.length) {
        return createResponse(res, false, code.NOT_FOUND, null, 'username existed')
    }
    const data = {
        id: uuidv4(),
        username,
        password,
        avatar: null,
        created_at: moment().utc().format('YYYY-MM-DD hh:mm:ss'),
        updated_at: moment().utc().format('YYYY-MM-DD hh:mm:ss'),
    }

    const isCreate = await userRepository.createUser(data)
    return createResponse(res, true, null, isCreate)
}

const login = async (req, res, next) => {
    const { username, password } = req.body
    const isExisted = await userRepository.getUser(username)
    if (!isExisted.length) {
        return createResponse(res, false, code.NOT_FOUND, null, 'username not existed')
    }

    if (isExisted[0].password != password) {
        return createResponse(res, false, code.BAD_REQUEST, null, 'password invalid')
    }

    const token = syncToken({
        id: isExisted[0].id,
        username: isExisted[0].username,
        avatar: isExisted[0].avatar
    })

    return createResponse(res, true, null, { token })
}

module.exports = {
    login,
    signup
}