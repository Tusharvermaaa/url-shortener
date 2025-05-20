
const mongoose= require("mongoose");
function connect_to_database(url)
{
   mongoose.connect(url).then(()=>console.log("database connected successfully")).catch(err=>console.log("connection issue " , err));
}

module.exports=connect_to_database;