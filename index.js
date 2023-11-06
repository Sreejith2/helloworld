import express from "express";
const port=5000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home");
});
app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.get("/blog",(req,res)=>{
    res.render("blog");
});

app.listen(port,(res,req)=>{
    console.log(`Server initiated at http://localhost:${port}`);
});