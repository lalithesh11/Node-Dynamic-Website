const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/mightytech",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
}).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>{
    console.log(`Connection not successfull: ${e}`);
})

