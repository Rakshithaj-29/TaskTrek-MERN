const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:100
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match:/^[\w-\.]+@([\w-+]+\.)+[\w-]{2,4}$/
    },
      password: {
        type: String,
        required: true,
        minlength: 8
    }},
     {
    timestamps: true

});
module.exports=mongoose.model("User",userSchema);