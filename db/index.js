const { createClient } = require('redis')

const redis = createClient(
    //     {
    //     url: 'redis://redis-12777.c252.ap-southeast-1-1.ec2.cloud.redislabs.com:12777',
    //     password: 'pH6aBYhu4hyYBgbbpnokSCiwnLWCpefe',
    //     database: 'Bnh-free-db'
    // }
)
redis.on('error', (err) => console.log('Redis Client Error', err));
redis.connect()

module.exports = redis