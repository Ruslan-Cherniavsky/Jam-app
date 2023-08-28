const express = require("express");
const router = express.Router();
const verifyAdminToken = require("../middlewares/checkAdminAuth");
const verifyToken = require("../middlewares/checkAuth");

const {
  getAllMusicalInstruments,
  addMusicalInstrument,
  deleteMusicalInstrumentsById,
} = require("../controllers/musicalInstruments");

router.get("/", verifyToken, getAllMusicalInstruments);
router.post("/add", verifyAdminToken, addMusicalInstrument);
router.delete(
  "/deleteMusicalInstruments/:musicalInstrumentId",
  verifyAdminToken,
  deleteMusicalInstrumentsById
);

module.exports = router;
