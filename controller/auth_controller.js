const User = require("../models/user_model");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
const register = async (req, res) => {
  const user = new User({
    firstName: "john",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    password: CryptoJS.AES.encrypt(
      "123456",
      process.env.PASS_SECRET
    ).toString(),
  });

  // const newUser = new User({
  //   userName: req.body.userName,
  //   email: req.body.email,
  //   password: CryptoJS.AES.encrypt(
  //     req.body.password,
  //     process.env.PASS_SECRET
  //   ).toString(),
  // });

  try {
    const saveUser = await user.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    !user && res.status(401).json("Wrong User Name");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );

    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    originalPassword != inputPassword && res.status(401).json("Wrong Password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1hr",
      }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { register, login };
