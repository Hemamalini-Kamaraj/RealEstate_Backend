const router = require("express").Router();
const userModel = require("../models/userModel");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", (req, res) => {
  userModel.find({}, {}).then((user) => {
    res.status(200).json(user);
  });
});

router.post("/signup", userController.signup);
router.put("/forgot-password", userController.forgotPassword);
router.patch("/reset-password/:id", userController.resetPassword);
router.post("/signin", userController.signin);

router.get("/profile", authMiddleware.verifyToken, userController.getUserProfile);
router.put("/profile", authMiddleware.verifyToken,userController.updateUserProfile)
module.exports = router;
