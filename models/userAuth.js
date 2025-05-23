const mongoose= require("mongoose");

const userAuth_schema= new mongoose.Schema({
    username:{
        type: String, 
        require: true , 
    },
    email:{
        type: String, 
        unique:true,
        required: true , 
    },
    password:{
        type:String ,
        required: true , 
    }
});
const userAuth_model=mongoose.model("userAuth" , userAuth_schema);
module.exports=userAuth_model;