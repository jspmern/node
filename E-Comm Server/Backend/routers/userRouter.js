const express = require("express")
const { userPostController } = require("../controllers/userController")

let userRouter = express.Router()

userRouter.get("/",)
userRouter.post("/", userPostController)
userRouter.delete("/",)
userRouter.patch("/",)

module.exports = userRouter