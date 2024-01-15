const { Schema, Repository } = require("redis-om");
const redis = require('../db')
const authSchema = new Schema('users', {
    id: { type: 'string' },
    username: { type: 'string' },
    password: { type: 'string' },
    avatar: { type: 'string' },
    created_at: { type: 'date' },
    updated_at: { type: 'date' }
  }, {
    dataStructure: 'HASH'
})

const userRepository = new Repository(authSchema, redis)
userRepository.createIndex();
module.exports = userRepository