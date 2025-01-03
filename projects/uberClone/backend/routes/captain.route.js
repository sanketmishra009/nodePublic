const router = require("express").Router();

const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authmiddleware = require("../middlewares/auth.middleware");

//register captain.

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Vehicle must be at least 3 characters long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least 3 characters long"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  (req, res, next) => {
    console.log("Inside captain.register.");
    next();
  },
  captainController.registerCaptain
);

router.post("/login", captainController.loginCaptain);

router.get(
  "/profile",
  authmiddleware.authorizeCaptain,
  captainController.getCaptainProfile
);

router.get(
  "/logout",
  authmiddleware.authorizeCaptain,
  captainController.logoutCaptain
);

module.exports = router;
