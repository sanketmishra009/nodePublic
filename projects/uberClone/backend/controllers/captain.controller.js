const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");
const captainService = require("../services/captain.service");
const blackListedTokenModel = require("../models/blackListedTokens.model");

module.exports.registerCaptain = async (req, res) => {
  console.log("inside captain.controller.registerCaptain");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // check if captain already exists

  const captainExists = await captainModel.findOne({ email: req.body.email });
  if (captainExists) {
    return res
      .status(400)
      .json({ errors: [{ msg: "Captain already exists" }] });
  }
  //hash password
  console.log("captain doesn't exist.");
  const hashpass = await captainModel.hashPassword(req.body.password);
  console.log("hashpass:", hashpass);
  //create new captain

  const newCaptain = await captainService.createCaptain({
    firstname: req.body.fullname.firstname,
    lastname: req.body.fullname.lastname,
    email: req.body.email,
    password: hashpass,
    color: req.body.vehicle.color,
    plate: req.body.vehicle.plate,
    capacity: req.body.vehicle.capacity,
    vehicleType: req.body.vehicle.vehicleType,
  });

  //create token
  const token = await newCaptain.generateToken();

  //return captain and token.

  res.status(201).json({ captain: newCaptain, token });
};

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  //check if captain exists
  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(400).json({ errors: [{ msg: "Invalid email" }] });
  }
  //compare password
  const match = await captain.comparePassword(password);
  if (!match) {
    return res.status(400).json({ errors: [{ msg: "Invalid password" }] });
  }
  //create token
  const token = await captain.generateToken();

  //send cookie
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  //return captain and token
  res.status(200).json({ captain, token });
};

module.exports.getCaptainProfile = async (req, res) => {
  const captain = req.captain;
  res.status(200).json({ captain });
};

module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blackListedTokenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
