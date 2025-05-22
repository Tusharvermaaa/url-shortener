
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
// TypeError: Cannot read properties of null (reading 'visithistory')
//     at redirecttosite (C:\Users\tusha\OneDrive\Desktop\node\yt----------\7(project2-acctogarg)with_mvc\controller\url.js:28:16)
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
async function showallurlsbyme(req, res)
{
  
     console.log(home);
    const alldata= await urlmodel.find({});

    res.status(200).json(alldata);
}
async function redirecttosite(req, res)
{
    const id=req.params.id;
    const thaturlobj=await urlmodel.findOne({shortid:id});
    if(!thaturlobj)
      return   res.json({"error":`<h1>invalid link error - please check the url you have entered ✅ or ❌</h1>`});
    thaturlobj.visithistory.push({timestamp : Date.now()});
   await thaturlobj.save();    
res.redirect( `http://${thaturlobj.incomingwebsite}` );

}
async function sendanalytics(req, res)
{
    
    const userobj=await urlmodel.findOne({shortid: req.params.id});
    if(!userobj) return res.status(404).json({"status": " no any url found "});
    return res.status(200).json({"user visited": userobj.visithistory.length});
}
async function deleteparticular(req, res)
{
   const id=req.params.id;
   const urlobj= await urlmodel.findOneAndDelete({shortid:id});
   res.json({"status": "entry delted successffully"})
}
async function homepagehandler(req , res)
{
   res.render('home');
}
async function aboutpagehandler(req, res)
{
    res.render('about' , {"about":"this is the about page ",
         "password ": "nahi bataunga"
    });
}
async function contactpagehandler(req, res)
{
    res.render('contact' , {"contact": " this is contact page , happy coding "});
}
module.exports= {handletheposturl, showallurlsbyme ,redirecttosite , sendanalytics  , deleteparticular , homepagehandler , aboutpagehandler , contactpagehandler};