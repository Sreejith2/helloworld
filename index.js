import express from "express";
const port=5000;
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello world");
});
app.get("/about",(req,res)=>{
    res.send("Welcome to about page");
});

app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page");
});

app.get("/blog",(req,res)=>{
    res.send("Welcome to blog page");
});

app.listen(port,(res,req)=>{
    console.log(`Server initiated at http://localhost:${port}`);
});