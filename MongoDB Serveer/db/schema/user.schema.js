const { Schema } = require("mongoose")
const userSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    countryCode: String,
    mobile: String,
    Hobbies: []
})

module.exports = userSchema