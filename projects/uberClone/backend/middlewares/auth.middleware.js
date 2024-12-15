const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const blackListedTokenModel = require("../models/blackListedTokens.model");

module.exports.authorizeUser = async (req, res, next) => {
  console.log("inside auth middleware");
  console.log(req.cookies);
  try {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;

    const isBlackListed = await blackListedTokenModel.findOne({ token: token });
    if (isBlackListed) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id);

    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
