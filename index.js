import express from "express";
const port=5000;
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello world");
});

app.listen(port,(res,req)=>{
    console.log(`Server initiated at http://localhost:${port}`);
});