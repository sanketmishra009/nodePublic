const userModel = require("../models/user.model");

module.exports.createUser = async (user) => {
  if (!user.fullname.firstname || !user.email || !user.password) {
    throw new Error("Firstname, email and password are required!");
  }
  const isUserAlready = await userModel.findOne({ email: user.email });
  if (isUserAlready) {
    throw new Error("User already exist!");
  }
  const newuser = userModel.create({
    fullname: user.fullname,
    email: user.email,
    password: user.password,
    createdAt: new Date().toISOString(),
  });
  return newuser;
};
