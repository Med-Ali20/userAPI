const jwt = require('jsonwebtoken')

const authenticateUser = async(req, res, next) => {
    try {
        const userId = jwt.verify(req.token, 'secretHandShake')
        console.log(userId)
        next()
    } catch(error){
        res.status(401).json('Unauthorized')
        console.log(error)
    }
}

module.exports = authenticateUser