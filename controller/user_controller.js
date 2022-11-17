const User = require("../models/user_model");
const CryptoJS = require("crypto-js");

// REGISTER
const register = async (req, res) => {
  const NewUser = new User({
    firstName: "Hujaifa",
    lastName: "Hossain",
    email: "hujaifa@gmail.com",
    password: CryptoJS.AES.encrypt("lovehujaifa21", process.env.PASS_SECRET),
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

// LOGIN
const login = async (req, res) => {
  try {
    const user = await User.findOne({
      userName: req.body.user_name,
    });

    !user && res.status(401).json("Wrong credential!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    ).toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    hashedPassword != inputPassword &&
      res.status(401).json("Wrong credential!");

    const { password, ...others } = user._doc;

    res.status(200).json(...others);
  } catch (error) {
    res.status(500).json(err);
  }
};

module.exports = { register, login };
