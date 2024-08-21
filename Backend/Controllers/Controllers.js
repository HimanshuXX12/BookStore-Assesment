const { response } = require("express");
const courses= require("../Models/Courses");
const document=  require("../courses (1) (1).json");
const json= require("jsonwebtoken");
const user_model= requre("../Models/user_model.js");


function controllers(app)
{
    //  const fetchUser= async ()=>{
    //      const {token}= req.query;
    //      if(!token)
    //      {
    //          return res.json({sucess:false,error:"Login First"});
    //      }
    //      else if(token)
    //      {
    //         const data=json.verify(token,"himanshu200127");
    //         req.body.user_data=data;
    //         return next();
    //      }

    //  }


       

   

            app.get("/books",async (req,res)=>{
                
                const data = await courses.find({});
                console.log("this is running");
                res.json({sucess:true,books:data});
            })

            app.post("/signup",async (req,res)=>{
                const {email,password}=req.body;
                console.log("singup funcion",req.body);
                if(!email || !password)
                {
                    res.json({error:"Both are required",sucess:false});
                }

                const user = await user_model.findOne({ email: email });

                if(user)
                {
                    res.json({error:"Already existed User with this Mail id",sucess:false})
                }
                else{
                    const hash= await bcrypt.hash(password,10);
                    const data= new user_model({
                        email:email,
                        password:hash
                    })

                    data.save().then(()=>{
                        res.json({error:"Sucessfully Signed Up",sucess:true,saved_data:data});
                    })

                }

        })

   // Login Route
            // app.post("/login",async (req,res)=>{
            //         const {email,password}= req.body;
            //         if(!email || !password)
            //         {
            //             res.json({error:"Both are required Login",sucess:false});
            //         }

            //         const user= await user_model.findOne({email:email});
            //         if(!user)
            //         {
            //         res.json({error:"No User Exists with this mail Id",sucess:null});
            //         }
            //         else{
            //             bcrypt.compare(password,user.password,function(err,data)
            //         {
            //                 if(err)
            //                 {
            //                 res.json({error:err});
            //                 }
            //                 else if(data)
            //                 {
            //                     const token= json.sign({
            //                     email:user.email
            //                     },"himanshu200127");
            //                     res.json({error:"Logined Sucessfully",token:token,sucess:true});

            //                 }
            //                 else
            //                 {
            //                     res.json({error:"Password did not Matched",sucess:false});
            //                 }
            //         })  
            //         }
            // })


        // const poster_fetch=async (req,res)=>{
        //     const {token}= req.body;
        //     if(!token)
        //     {
        //         return res.json({sucess:false,error:"Login First"});
        //     }
        //     else if(token)
        //     {
        //        const data=json.verify(token,"himanshu200127");
        //        req.body.user_data=data;
        //        return next();
        //     }
        // }
             
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