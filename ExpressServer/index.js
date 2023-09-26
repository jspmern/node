const express = require("express")
const path = require("path")
const app = express()
const PORT = 9692
const hostname = "127.0.0.5"

app.use(express.json())

app.get("/", (req, res) => {
    // res.json({ name: "Vicky" })
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/post", (req, res) => {
    console.log(req.body);
    res.send({ "message": "data stored" })
})

app.listen(PORT, hostname, () => {
    console.log(`server started at http://${hostname}:${PORT}`);
})