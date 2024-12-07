const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const userService = require("../services/user.service");

module.exports.registerUser = async (req, res, next) => {
  console.log("inside register user");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log("req.body", req.body);
  const { fullname, email, password } = req.body;
  const isUserAlready = await userModel.findOne({ email });

  if (isUserAlready) {
    return res.status(400).json({ message: "User already exist" });
  }
  const hashPass = await userModel.hashPassword(password);
  const user = await userService.createUser({
    fullname: fullname,
    email: email,
    password: hashPass,
  });

  const token = user.generateAuthToken();
  console.log("token: ", token);
  console.log("user: ", user);
  // return res.status(201).json({ token, user });
  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  console.log("req.body", req.body);
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  console.log("user found: ", user);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password!" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password!" });
  }
  const token = await user.generateAuthToken();
  // console.log(token);
  res.status(200).json({ token, user });
};
