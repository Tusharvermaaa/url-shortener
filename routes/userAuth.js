const express= require("express");
const userAuth_router=express.Router();
const {handleUserSignup , handleUserSignupPage , handleUserLogin , handleUserLoginPage} = require("../controller/userAuth.js");


userAuth_router.use(express.urlencoded({extended:true})); // so that it can take data from the form also 
userAuth_router.use(express.json()); // so that it can take data from json format 

userAuth_router.route("/login")
.get(handleUserLoginPage)
.post(handleUserLogin);

userAuth_router.route("/")
.get(handleUserSignupPage) // show the signup page 
.post(handleUserSignup);


module.exports=userAuth_router;

