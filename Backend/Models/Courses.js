const mongoose= require("mongoose");

const chapterSchema = new mongoose.Schema({
    name: {
      type: String,  // The title or name of the chapter
      required: true // Ensures that the 'name' field is required
    },
    text: {
      type: String,  // The text or description associated with the chapter
      required: true // Ensures that the 'text' field is required
    },
    rating:{
      type:Number
    }
  });

const schema= mongoose.Schema({
   description:{
     type:String,
     required:true
   },
   date: {
     type:Number,
     default:Date.now()
   },
   name:String,
   chapters:{
      type:[chapterSchema],
      required:true
   },
   domain:{
     type:[String],
     required:true
   },
  


});


const Model= mongoose.model("course",schema);

module.exports=Model;