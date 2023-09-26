const { createServer } = require("http")
const { readFileSync, writeFileSync } = require("fs")
const { join } = require('path')
const PORT = 8000;
const hostName = "127.0.0.5"

const app = createServer((req, res) => {
    const { url, method } = req;
    console.log(method, url);
    if (url === "/") {
        let data = readFileSync(join(__dirname, "public", "index.html"), "utf-8")
        res.end(data)
    }
    if (url == '/user') {
        if (method == "POST") {
            req.on('data', (data) => {
                const user = JSON.parse(data.toString());
                console.log(user);
                let users = JSON.parse(readFileSync(join(__dirname, "db", "user.json"), "utf-8"))
                // console.log(users);
                users.push(user)
                writeFileSync(join(__dirname, "db", "user.json"), JSON.stringify(users));
                res.writeHead(400, { "content-type": "application/json" })
                res.end(JSON.stringify({ message: "added", h: "hello" }))
            });
        }
    }
});


app.listen(PORT, hostName, () => {
    console.log(`server started in http://${hostName}:${PORT}`);
})