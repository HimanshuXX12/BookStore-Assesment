const env=require("dotenv").config();
const mongoose= require("mongoose");
const express= require("express");
const app= express();
const controllers= require("./Controllers/Controllers");
app.use(express.json());
const cors= require("cors");
app.use(express.urlencoded({extended:false}));
app.use(cors());
controllers(app);
const port=process.env.PORT|| 300;
// const db_link=`mongodb+srv://himanshu200127:${process.env.PASSWORD}@cluster0.upi6i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const db_link="mongodb+srv://himanshu200127:7dsMUFnqY0EtszyZ@cluster0.upi6i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(db_link).then(()=>{
     console.log("Databse is connected");
}).catch((err)=>{
   console.log("Databse is not connected");
})
   
app.listen(port,()=>{
    console.log("Server is running");
})