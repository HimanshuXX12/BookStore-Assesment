const { response } = require("express");
const courses= require("../Models/Courses");
const document=  require("../courses (1) (1).json");
const json= require("jsonwebtoken");

function controllers(app)
{
     const fetchUser= async ()=>{
         const {token}= req.query;
         if(!token)
         {
             return res.json({sucess:false,error:"Login First"});
         }
         else if(token)
         {
            const data=json.verify(token,"himanshu200127");
            req.body.user_data=data;
            return next();
         }

     }


       

   

     app.get("/books",async (req,res)=>{
         
          const data = await courses.find({});
           console.log("this is running");
          res.json({sucess:true,books:data});
     })


     // Rating Updation

     app.post("/rating",async (req,res)=>{
         
          const { chapter_id,
               bookid,
               rating}= req.body;
            const data= await courses.findById(bookid);
           

            for(let i=0;i<data.chapters.length;i++)
            {
                 if(data.chapters[i]._id==chapter_id)
                 {
                     data.chapters[i].rating=rating;
                 
                 }
            }
   
             const result= await courses.updateOne({_id:bookid},{chapters:data.chapters});
                 if(result)
                 {
                     res.json({sucess:true,error:"Sucessfully Rated",updatted_data:response});
                 }
                 else{
                    res.json({sucess:false,error:"Failled to Rate",updatted_data:""}); 
                 }



     })
    
     



}


module.exports=controllers;