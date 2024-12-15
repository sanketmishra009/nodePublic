const router = require("express").Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleWare = require("../middlewares/auth.middleware");

const validate = (req, res, next) => {
  body("email").isEmail().withMessage("invalid email!");
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("firstname must be at least 3 characters long!");
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long!");
  next();
};

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
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.loginUser
);

router.get(
  "/profile",
  authMiddleWare.authorizeUser,
  userController.getUserProfile
);

router.get("/logout", authMiddleWare.authorizeUser, userController.logoutUser);

module.exports = router;
