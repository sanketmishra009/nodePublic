const captainModel = require("../models/captain.model");

module.exports.createCaptain = async (captain) => {
  console.log("inside captain.service.createCaptain");
  console.log(captain);
  const {
    firstname,
    lastname,
    email,
    password,
    color,
    plate,
    capacity,
    vehicleType,
  } = captain;
  console.log(
    firstname,
    lastname,
    email,
    password,
    color,
    plate,
    capacity,
    vehicleType
  );
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("All fields are required");
  }

  const newCaptain = await captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });
  console.log("captain created:", newCaptain);
  return newCaptain;
};
