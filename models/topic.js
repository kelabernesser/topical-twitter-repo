const mongoose = require('mongoose')
const Schema = mongoose.Schema

const topicSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    textBody: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Topic", topicSchema)