const {createServer}=require("http")
const{readFileSync}=require("fs")
const {join}=require('path')
const PORT=8000;
const hostName="127.0.0.5"

const app=createServer((req,res)=>{
    const{url,method}=req;
    console.log(method,url);
    if(url==="/"){
        let data=readFileSync(join(__dirname,"public","index.html"),"utf-8")
        res.end(data)
    }
});


app.listen(PORT,hostName,()=>{
    console.log(`server started in http://${hostName}:${PORT}`);
})