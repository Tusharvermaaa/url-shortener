
const sessiontousermap = new Map();
async function setuser(id , user)
{
    sessiontousermap.set(id, user);
}
function getuser(id)
{
    return sessiontousermap.get(id);
}

module.exports={
    getuser , setuser ,
};