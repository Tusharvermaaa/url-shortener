const express= require("express");
const {handletheposturl, showallurlsbyme ,redirecttosite , sendanalytics,deleteparticular}= require("../controller/url.js"); 

const url_route=express.Router();

url_route.route("/url")
.post(handletheposturl)
.get(showallurlsbyme);

url_route.route("/:id")
.get(redirecttosite)
.delete(deleteparticular)

url_route.route("/analytics/:id")
.get(sendanalytics);

module.exports= url_route;