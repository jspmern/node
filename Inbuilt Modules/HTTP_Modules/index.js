const http=require("http");
const PORT=4050;
const hostName="127.0.0.1"
const app=http.createServer((req,res)=>{
    const{url}=req;
    if(url=="/home"){
        res.write("<h1>Hello Vicky i'm home page</h1>")
        res.end();
    }
    else if(url=="/about"){
        res.end("<h1>Welcome to about page</h1>")
    }
    else{
        res.end("<h1>Url Not found</h1>")
    }
});

// app.on("request",(req,res)=>{
//     console.log(req.url);
// });

app.listen(PORT,hostName,()=>{
    console.log("Server is started in http://"+hostName+":"+PORT);
})