const { json } = require("express");
const User = require("../models/UserModel");
const createToken = require("../utils/token");

// login user
const loginUser = async (req, res) => {
  const { _id, email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // create token

    const token = createToken(user._id);
    res.status(200).json({ email, password, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// signup user

const signupUser = async (req, res) => {
  const { _id, email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    // create token

    const token = createToken(_id);
    res.status(200).json({ email, password, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
