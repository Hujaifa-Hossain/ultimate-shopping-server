const User = require("../models/user_model");

const update_user = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json(error);
  }
}

const get_user = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

const get_users = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  get_user,
  update_user,
  get_users,
};
