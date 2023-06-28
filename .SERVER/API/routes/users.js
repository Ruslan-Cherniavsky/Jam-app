const express = require("express");
const router = express.Router();
const verifyAdminToken = require("../middlewares/checkAdminAuth");
const verifyToken = require("../middlewares/checkAuth");

const {
  signup,
  login,
  getAllUsers,
  deleteUserById,
  getJemerCardDataById,
} = require("../controllers/users");

router.post("/signup", signup);
router.post("/login", login);

router.get("/getallusers", verifyToken, getAllUsers);

router.get("/getjemercarddatabyid/:userid", verifyToken, getJemerCardDataById);

router.delete("/deleteuserbyid/:userid", verifyAdminToken, deleteUserById);

module.exports = router;
