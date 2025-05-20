const express= require("express");
const connect_to_database= require("./views/view.js");
const app= express();
const url_router= require("./routes/url.js")
const PORT= 8003;
const databaseurl="mongodb://127.0.0.1:27017/";

connect_to_database(databaseurl);
app.use(express.json());

app.use("/" , url_router)


app.listen(PORT , ()=>{console.log(`server running at port ${PORT}`)});