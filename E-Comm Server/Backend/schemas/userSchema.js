const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    gender: String,
    address: String,
    password: String,
    email: String,
    mobile: String
})

module.exports = userSchema;