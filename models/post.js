const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    textBody : {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Post", postSchema)