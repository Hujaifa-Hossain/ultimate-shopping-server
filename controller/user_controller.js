const user = require("../models/user_model");
const CryptoJS = require('crypto-js');

const create_user = async (req, res) => {
  const NewUser = new user({
    firstName: "Hujaifa",
    lastName: "Hossain",
    email: "hujaifa@gmail.com",
    password: CryptoJS.AES.encrypt('lovehujaifa21', process.env.PASS_SECRET),
  });

  // const NUser = new user({
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,~
  //   password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET)
  // })

  try {
    const saveUser = await NewUser.save();
    console.log(saveUser);
  } catch (err) {
    console.log(err);
  }
};


module.exports = { create_user, }