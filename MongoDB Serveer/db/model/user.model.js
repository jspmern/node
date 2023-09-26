const { model } = require("mongoose")
const userSchema = require("../schema/user.schema")

const userModel = model("user", userSchema)

module.exports = userModel
