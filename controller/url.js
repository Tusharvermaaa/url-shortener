
const express= require("express");
const urlmodel= require("../models/urlmodel");
const {nanoid}= require("nanoid");
async function handletheposturl(req, res)
{
    const posturl = req.body;
    const id= nanoid(6);
    console.log(typeof(id ), id );
    console.log(req);
    const newurlindb={...posturl , shortid: id, visithistory:[{timestamp: Date.now() }] };
    urlmodel.create(newurlindb);
    res.status(200).json({"status":"pending" , ...newurlindb});
}

async function showallurlsbyme(req, res)
{
  
    const alldata= await urlmodel.find({});

    res.status(200).json(alldata);
}
async function redirecttosite(req, res)
{
    const id=req.params.id;
    const thaturlobj=await urlmodel.findOne({shortid:id});
    thaturlobj.visithistory.push({timestamp : Date.now()});
   await thaturlobj.save();    
res.redirect( `http://${thaturlobj.incomingwebsite}` );

}
async function sendanalytics(req, res)
{
    
    const userobj=await urlmodel.findOne({shortid: req.params.id});
    return res.status(200).json({"user visited": userobj.visithistory.length});
}
async function deleteparticular(req, res)
{
   const id=req.params.id;
   const urlobj= await urlmodel.findOneAndDelete({shortid:id});
   res.json({"status": "entry delted successffully"})
}

module.exports= {handletheposturl, showallurlsbyme ,redirecttosite , sendanalytics  , deleteparticular};