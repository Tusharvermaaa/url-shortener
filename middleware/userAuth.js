const { getuser } = require("../service/AuthService");

async function restrictnonloginers(req, res , next)
{
    const sessionidfromcookie= req.cookies?.usid;
    if(!sessionidfromcookie) return res.redirect("/user/login");

    const userfrommap=getuser(sessionidfromcookie);
    if(!userfrommap)  return res.redirect("/user/login");
    res.user=userfrommap;
    next();
}
module.exports= restrictnonloginers;