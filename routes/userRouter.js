const express = require('express')
const userRouter = express.Router()
const User = require("../models/user.js")

userRouter.get('/', (req, res, next) => {
    User.find((err, users) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})

userRouter.post('/', (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (user) {
            return res.status(200).send(user)
        } else {
            const newUser = new User(req.body)
            newUser.save((err, savedUser) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send({ user: savedUser })
            })

        }


    })

})

userRouter.delete('/:userId', (req, res, next) => {
    User.findOneAndDelete(
        {_id: req.params.userId},
        (err, deletedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send("Successfully deleted User")
        }
    )
})
module.exports = userRouter