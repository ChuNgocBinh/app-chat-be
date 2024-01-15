const { userRepository } = require('../models')

const getUser = async (data) => {
    const result = await userRepository.search()
        .where('username').equal(data)
        .return.all()
    return result
}

const createUser = async (payload) => {
    const result = await userRepository.save(payload)
    return result
}

const getUserByKeyword = async (keyword) => {
    const result = await userRepository.search()
        .where('username').eq(`*${keyword}*`)
        .return.all()
    return result
}

const getUserById = async (id) => {
    const result = await userRepository.search()
        .where('id').eq(id)
        .return.first()
    return result
}

module.exports = {
    getUser,
    createUser,
    getUserByKeyword,
    getUserById
}