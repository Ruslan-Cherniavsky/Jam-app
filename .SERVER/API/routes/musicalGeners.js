const express = require("express");
const router = express.Router();
const verifyAdminToken = require("../middlewares/checkAdminAuth");
const verifyToken = require("../middlewares/checkAuth");

const {
  getAllMusicalGeners,
  addMusicalGener,
  deleteMusicalGenersById,
} = require("../controllers/musicalGeners");

router.get("/", verifyToken, getAllMusicalGeners);
router.post("/add", verifyAdminToken, addMusicalGener);
router.delete(
  "/deleteMusicalGeners/:musicalGenerId",
  verifyAdminToken,
  deleteMusicalGenersById
);

module.exports = router;
