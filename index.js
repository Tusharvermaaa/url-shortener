const dotenv = require("dotenv");
dotenv.config(); // to use the env variables
const express = require("express");
const path = require("path");
const { connect_to_database } = require("./views/view.js");
const app = express();
const url_router = require("./routes/url.js");
const userAuth_router = require("./routes/userAuth.js");
const PORT = process.env.PORT;
const localhosturl = "mongodb://127.0.0.1:27017/";
const databaseurl=process.env.DATABASE_URL;// || localhosturl;
const restrictnonloginers = require("./middleware/userAuth.js");
const cookieParser = require("cookie-parser");
const public_router = require("./routes/public.js");
connect_to_database(databaseurl);

app.set("view engine", "ejs"); // to render the frontend / server side rendering is useful ,
app.set("views", path.join(__dirname, "views"));  // tell the app or express that views paths are this

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); // sstatic file like css
// now creating the route to render the ejs pages
// app.use(express.json()); for postman json form
app.use(express.urlencoded({ extended: true })); // from form data


app.use("/user", userAuth_router);
app.use("/red", public_router);
app.use("/", restrictnonloginers, url_router);

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
