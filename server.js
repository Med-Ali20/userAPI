const express = require('express')
const connect = require('./db/connect')
const userRouter = require('./routes/user')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use('/user', userRouter)
connect()



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})