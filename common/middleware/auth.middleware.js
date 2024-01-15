const { code, status } = require("../../utility/common")
const { verifyToken } = require("../../utility/utility")

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const user = verifyToken(token)
        req.user = user
        next()
    } catch (error) {
        res.status(code.UNAUTHORIZED).send({
            status: status.ERROR,
            message: 'Unauthorized'
        })
    }
}

module.exports = auth