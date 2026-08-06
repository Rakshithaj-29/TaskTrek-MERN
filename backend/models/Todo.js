const mongoose=require("mongoose");
const todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:100
    },
   status:{
    type:String,
    enum:["Todo","Doing","Done"],
    default:"Todo"
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true,

   }
});
const Todo=mongoose.model("Todo",todoSchema);
module.exports=Todo;