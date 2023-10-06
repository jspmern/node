//express
const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken");
const DbConnect = require("./config/dbConfig");
const userRouter = require("./routers/userRouter");
const app = express();

//port and hostname
const PORT = 6000;
const hostname = "127.0.0.1";

//cors
app.use(cors())

//json
app.use(express.json())

//jwt token
app.get("/", (req, res) => {
    let user = { name: "vicky", age: 24, pass: "12345" }

    jwt.sign({ user }, "hey there", { expiresIn: "500s" }, (err, token) => {
        if (!err) {
            res.send(token)
        }
    })
})
app.post("/token", (req, res) => {
    console.log(req.headers["authorization"]);
    jwt.verify(req.headers["authorization"], "hey there", (err, decode) => {
        if (err) {
            res.status(400).send("token is not valid", err)
        } else {
            res.status(200).json(decode)
        }
    })
})

//routers
app.use("/user", userRouter)




//app listening
app.listen(PORT, hostname, async () => {
    DbConnect()
    console.log(`Server Started at http://${hostname}:${PORT}`);
})