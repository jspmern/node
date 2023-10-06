const userModel = require("../models/userModel")

const userPostController = async (req, res) => {
    const userData = new userModel(req.body)
    const user = await userData.save()
    res.send("data stored in db")
}



module.exports = { userPostController }