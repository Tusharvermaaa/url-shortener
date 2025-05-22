const express= require("express");
const path = require("path");
const connect_to_database= require("./views/view.js");
const app= express();
const url_router= require("./routes/url.js")
const PORT= 8003;
const databaseurl="mongodb://127.0.0.1:27017/";

connect_to_database(databaseurl);
app.set("view engine" ,"ejs"); // to render the frontend / server side rendering is useful , 
app.set("views" , path.join(__dirname , "views") ); // tell the app or express that views paths are this 
app.use(express.static(path.join(__dirname, 'public'))); // sstatic file like css 
// now creating the route to render the ejs pages  
// app.use(express.json()); for postman json form 
app.use(express.urlencoded({ extended: true }));  // from form data 
app.use("/" , url_router)


app.listen(PORT , ()=>{console.log(`server running at port ${PORT}`)});