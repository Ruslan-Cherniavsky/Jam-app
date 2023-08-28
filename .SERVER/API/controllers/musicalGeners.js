const mongoose = require("mongoose");
const MusicalGaners = require("../models/musicalGeners");

const addMusicalGener = async (req, res) => {
  const { musicalGener } = req.body;

  try {
    const musicalGanersFromDb = await MusicalGaners.find({ musicalGener });
    if (musicalGanersFromDb.length >= 1) {
      return res.status(409).json({ message: "Musical Gener exists!" });
    }

    const newMusicalGener = new MusicalGaners({
      _id: new mongoose.Types.ObjectId(),
      musicalGener: musicalGener,
    });

    await newMusicalGener.save();
    console.log(newMusicalGener);
    return res
      .status(200)
      .json({ message: "New Musical Gener Created ! LETS PLAY" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllMusicalGeners = async (req, res) => {
  try {
    const musicalGaners = await MusicalGaners.find();
    return res.status(200).json({ musicalGaners });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteMusicalGenersById = async (req, res) => {
  const musicalGenerId = req.params.musicalGenerId;
  try {
    const generId = await MusicalGaners.findById(musicalGenerId);
    if (!generId) {
      return res.status(404).json({ message: "Musical gener not found!" });
    }
    await MusicalGaners.deleteOne({ _id: generId });
    return res
      .status(200)
      .json({ message: `Gener id: ${generId} DELETED !!!! ` });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  addMusicalGener,
  getAllMusicalGeners,
  deleteMusicalGenersById,
};
