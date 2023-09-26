const express = require("express")
const { userPostControll } = require("../controller/user.controller")

const userRouter = express.Router()

userRouter.get("/",)

userRouter.post("/", userPostControll)

userRouter.put("/",)

userRouter.delete("/",)

module.exports = userRouter;