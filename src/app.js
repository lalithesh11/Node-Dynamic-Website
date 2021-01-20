// const { static } = require("express");
const express=require("express");
const path=require("path");
require("./db/conn");
const hbs=require("hbs");
const User=require("./models/users");
const port=process.env.PORT || 8000;

const app=express();

// setting the static path
const static_Path=path.join(__dirname,"../public");
// setting the views path
const views_Path=path.join(__dirname,"../templates/views");
// setting the partials path
const partials_Path=path.join(__dirname,"../templates/partials");

// middlewares:
app.use(express.static(static_Path));
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.set("view engine","hbs");
app.set("views",views_Path);
hbs.registerPartials(partials_Path);

app.use(express.urlencoded({extended:false}));


// routing 
app.get("/",(req,res)=>{
   res.status(200).render("index");
})

app.post("/contact",async (req,res)=>{
 try {
         const userData=await new User(req.body);
        await userData.save();
        res.status(200).render("index");
 } catch (error) {
    res.status(400).send("Invalid Details");
 }
})


// server create
app.listen(port,()=>{
    console.log(`Connection is active on port: ${port}`);
})

