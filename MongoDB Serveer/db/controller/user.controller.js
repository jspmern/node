const userModel = require("../model/user.model")


async function userPostControll(req, res) {
    console.log(req.body);
    res.send("HEHEHEHE")
}




module.exports = { userPostControll }