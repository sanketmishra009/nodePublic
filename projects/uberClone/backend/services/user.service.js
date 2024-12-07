const userModel = require("../models/user.model");

module.exports.createUser = async (userCredentials) => {
  console.log("usercredentials", userCredentials);
  if (
    !userCredentials.fullname.firstname ||
    !userCredentials.email ||
    !userCredentials.password
  ) {
    console.log("all fields are required!");
    return null;
  }
  const time = new Date().toLocaleString();
  console.log("time", time);
  const user = await userModel.create({
    fullname: {
      firstname: userCredentials.fullname.firstname,
      lastname: userCredentials.fullname.lastname,
    },
    email: userCredentials.email,
    password: userCredentials.password,
    createdAt: time,
  });
  console.log("user created:", user);
  return user;
};
