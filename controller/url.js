const express = require("express");
const { giveui } = require("../views/view");
const urlmodel = require("../models/urlmodel");
const { nanoid } = require("nanoid");
const user_model = require("../models/usermodel");
async function handletheposturl(req, res) {
  // console.log("clicked");
  const posturl = req.body;
  // console.log(req);
  const id = nanoid(6);
  const newurlindb = {
    incomingwebsite: posturl.originalUrl,
    shortid: id,
    visithistory: [{ timestamp: Date.now() }],
    createdby: res.user._id,
  };
  urlmodel.create(newurlindb);
  const shorturl = `http://localhost:8003/red/${id}`;
  // shortedurl=`http://${req.url}`
  return res.render("home", { shorturl });
  // res.status(200).json({"status":"pending" , ...newurlindb});
}

async function showallurlsbyme(req, res) {
  const onlyid = res.user._id;
  console.log(req);
  const origin=req.get('host');
  console.log(origin);
  const alldata = await urlmodel.find({ createdby: onlyid });

  return res.render("allurls", {
    alldatas: giveui(alldata, origin),
  });
  // return res.status(200).json(alldata);
}
async function redirecttosite(req, res) {
  const id = req.params.id;
  console.log(id);
  const thaturlobj = await urlmodel.findOne({ shortid: id });
  if (!thaturlobj)
    return res.json({
      error: `<h1>invalid link error - please check the url you have entered ✅ or ❌</h1>`,
    });
  thaturlobj.visithistory.push({ timestamp: Date.now() });
  await thaturlobj.save();
  console.log(thaturlobj.incomingwebsite);
  if (thaturlobj.incomingwebsite.includes("http://"))
    return res.redirect(`${thaturlobj.incomingwebsite}`);
  else if(thaturlobj.incomingwebsite.includes("https://"))
    return res.redirect(`${thaturlobj.incomingwebsite}`);
  else
  return res.redirect(`https://${thaturlobj.incomingwebsite}`);
}
async function sendanalytics(req, res) {
  const userobj = await urlmodel.findOne({ shortid: req.params.id });
  if (!userobj) return res.status(404).json({ status: " no any url found " });
  return res.status(200).json({ "user visited": userobj.visithistory.length });
}
async function deleteparticular(req, res) {
  const id = req.params.id;
  const urlobj = await urlmodel.findOneAndDelete({ shortid: id });
  return res.json({ status: "entry delted successffully" });
}
async function homepagehandler(req, res) {
  return res.render("home", { shorturl: null });
}
async function aboutpagehandler(req, res) {
  return res.render("about", {
    about: "this is the about page ",
    "password ": "nahi bataunga",
  });
}
async function contactpagehandler(req, res) {
  return res.render("contact", {
    contact: " this is contact page , happy coding ",
  });
}

async function handlecontactdata(req, res) {
  // validate and write the data to the database
  const data = req.body;
  console.log(data);
  const userobjofdb = user_model.create(data);
  console.log(userobjofdb);
  return res.render("thankyoucontacting", {
    shouldrender: true,
    username: data.username,
  });
}
module.exports = {
  handletheposturl,
  showallurlsbyme,
  redirecttosite,
  sendanalytics,
  deleteparticular,
  homepagehandler,
  aboutpagehandler,
  contactpagehandler,
  handlecontactdata,
};
