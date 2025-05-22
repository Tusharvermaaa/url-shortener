const mongoose= require("mongoose");
const user_schema= new mongoose.Schema({
    username :{
        type: String, 
        required: true,
    },
    email:{
        type: String, 
        required: true 
    }
    ,
    message:{
        type: String, 
    }
})
const user_model= mongoose.model("userofurl" , user_schema);

module.exports=user_model;