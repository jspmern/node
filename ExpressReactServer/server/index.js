const express = require("express")
const app = express()
const PORT = 2525
const hostname = "127.0.0.7"




app.listen(PORT, hostname, () => {
    console.log(`server listening to http://${hostname}:${PORT}`);
})