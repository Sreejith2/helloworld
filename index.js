import express from "express";
const port=5000;
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>Welcome to about page</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Welcome to contact page</h1>");
});

app.get("/blog",(req,res)=>{
    res.send("<h1>Welcome to blog page</h1>");
});

app.listen(port,(res,req)=>{
    console.log(`Server initiated at http://localhost:${port}`);
});