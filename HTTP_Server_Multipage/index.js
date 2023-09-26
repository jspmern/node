const http = require('http');
const fs = require("fs");
const path = require("path");
const PORT = 5050;
const hostName = "127.0.0.5";
const app = http.createServer((req, res) => {
    const { url, method } = req;
    console.log(url);
    if (url == "/") {
        let data = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), "utf-8")
        // res.statusCode=200;
        res.writeHead(200, { "content-type": "text/html" })
        res.write(data);
    }
    if (url == '/index.css') {
        let data = fs.readFileSync(path.join(__dirname, 'public', 'css', 'index.css'), 'utf-8')
        res.write(data);
    }
    if (url == "/blogs") {
        let data = fs.readFileSync(path.join(__dirname, 'public', 'pages', 'blogs.html'), 'utf-8')
        res.write(data);
    }
    if (url == "/aboutus") {
        let data = fs.readFileSync(path.join(__dirname, 'public', 'pages', 'aboutus.html'), 'utf-8')
        res.write(data);
    }
    if (url == "/contact") {
        let data = fs.readFileSync(path.join(__dirname, 'public', 'pages', 'contact.html'), 'utf-8')
        res.write(data);
    }
    else {
        let data = fs.readFileSync(path.join(__dirname, 'public', 'pages', 'pageNotFound.html'), 'utf-8')
        res.write(data);
    }
    res.end();
})

app.listen(PORT, hostName, () => {
    console.log("server is started in " + "http://" + hostName + ":" + PORT);
})