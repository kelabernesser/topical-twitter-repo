const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/topicaldb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

},
() => console.log("Connected to the DB")
)

app.use('/user', require("./routes/userRouter.js"))
app.use('/post', require("./routes/postRouter.js"))
app.use('/topic', require('./routes/topicRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})