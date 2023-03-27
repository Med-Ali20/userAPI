const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/sign-up', async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        const token = User.generateAuthToken(newUser._id)
        res.status(201).send({user: newUser, token})
    } catch (error) {
        res.status(400).json('could not register new user')
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.confirmCredentials(req.body.email, req.body.password)
        const token = User.generateAuthToken(user._id)
        res.status(201).send({user, token})
    } catch (error) {
        res.status(401).json('Invalid Credentials')
    }
})

module.exports = router