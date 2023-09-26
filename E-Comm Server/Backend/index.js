//express
const express = require("express")
const app = express();

//port and hostname
const PORT = 6666;
const hostname = "127.0.0.8";



//app listening
app.listen(PORT, hostname, () => {
    console.log(`Server Started at http://${hostname}:${PORT}`);
})