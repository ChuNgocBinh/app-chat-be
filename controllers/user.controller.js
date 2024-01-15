const { userRepository } = require('../repository')
const { code, status } = require('../utility/common')
const { createResponse } = require('../utility/utility')

const getUser = async (req, res, next) => {
    const { username } = req.query
    const users = await userRepository.getUserByKeyword(username)
    return createResponse(res, true, null, users)
}

const getMe = async (req, res, next) => {
    const user = req.user
    const users = await userRepository.getUserById(user.id)
    res.status(code.SUCCESS).send({
        status: status.SUCCESS,
        data: users
    })
    // return createResponse(res, true, null, users)
}


module.exports = {
    getUser,
    getMe
}