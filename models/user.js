const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    postCount: {
        type: Number,
        default: 0
    },
    memberSince:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("User", userSchema)