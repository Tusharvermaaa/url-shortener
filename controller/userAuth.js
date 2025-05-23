const userAuth_model = require("../models/userAuth");
async function handleUserSignup(req, res) {
  const { username, email, password } = req.body;
  //just write the data in teh data base
  const userauthobj = await userAuth_model.create({
    username,
    email,
    password,
  });
  const origin = req.get("origin");
  console.log(origin);
  res.redirect(`${origin}/user/login`);
  // res.render("login");
}
async function handleUserSignupPage(req, res) {
  res.render("signup");
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const userAuthlogin = await userAuth_model.findOne({
    email: email,
    password: password,
  });
  if (!userAuthlogin)
    return res.render("login", {
      message: "wrong details or not signup to the portal",
    });

  return res.render("home", { shorturl: null });
}
async function handleUserLoginPage(req, res) {
  return res.render("login");
}

module.exports = {
  handleUserSignup,
  handleUserSignupPage,
  handleUserLogin,
  handleUserLoginPage,
};
