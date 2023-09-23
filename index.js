import express from "express"

const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("<h1>hellooo ra bacha</h1>");
    // console.log(req.rawHeaders);    
});
app.get("/howle",(req,res)=>{
    res.send("<h1>shock ayyavaaa</h1>");
});
app.listen(port,()=>{
    console.log(`service running on port ${port}`);
});