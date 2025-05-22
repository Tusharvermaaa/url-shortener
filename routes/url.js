const express= require("express");
const {handletheposturl, showallurlsbyme ,redirecttosite , sendanalytics,deleteparticular , homepagehandler , aboutpagehandler , contactpagehandler , handlethankyou , handlecontactdata}= require("../controller/url.js"); 


const url_route=express.Router();
 url_route.route("/")
 .get(homepagehandler)
 .post(handletheposturl); 
url_route.route("/about")
.get(aboutpagehandler);
url_route.route("/contact")
.get(contactpagehandler)
.post(handlecontactdata);
;

url_route.route("/url")
.get(showallurlsbyme);



url_route.route("/:id")
.get(redirecttosite)
.delete(deleteparticular)

url_route.route("/analytics/:id")
.get(sendanalytics);

module.exports= url_route;