const mongoose = require("mongoose");
const MusicalGaners = require("../models/musicalInstruments");

const addMusicalInstrument = async (req, res) => {
  const { musicalInstrument } = req.body;

  try {
    const musicalGanersFromDb = await MusicalGaners.find({ musicalInstrument });
    if (musicalGanersFromDb.length >= 1) {
      return res.status(409).json({ message: "Musical Instrument exists!" });
    }

    const newMusicalInstrument = new MusicalGaners({
      _id: new mongoose.Types.ObjectId(),
      musicalInstrument: musicalInstrument,
    });

    await newMusicalInstrument.save();
    console.log(newMusicalInstrument);
    return res
      .status(200)
      .json({ message: "New Musical Instrument Created ! LETS PLAY" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllMusicalInstruments = async (req, res) => {
  try {
    const musicalGaners = await MusicalGaners.find();
    return res.status(200).json({ musicalGaners });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteMusicalInstrumentsById = async (req, res) => {
  const musicalInstrumentId = req.params.musicalInstrumentId;
  try {
    const InstrumentId = await MusicalGaners.findById(musicalInstrumentId);
    if (!InstrumentId) {
      return res.status(404).json({ message: "Musical Instrument not found!" });
    }
    await MusicalGaners.deleteOne({ _id: InstrumentId });
    return res
      .status(200)
      .json({ message: `Instrument id: ${InstrumentId} DELETED !!!! ` });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  addMusicalInstrument,
  getAllMusicalInstruments,
  deleteMusicalInstrumentsById,
};
