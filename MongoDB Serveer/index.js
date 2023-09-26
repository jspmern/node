const express = require("express")
const app = express()
const PORT = 5555
const hostname = "127.0.0.3"

let main = require("./db/db")
const cors = require("cors")

//routers
const userRouter = require("./db/routers/user.router")

//json middleware
app.use(express.json())

//cors middleware
app.use(cors({
    origin: "http://localhost:3000"
}))

//routing middlewares
app.use("/user", userRouter)

//server listening
app.listen(PORT, hostname, () => {
    console.log(`server listening to http://${hostname}:${PORT}`);
    main();
})