const mongoose = require('mongoose')

const musicalInstrumentsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    musicalInstrument: { type: String, required: true, min: 2, max: 60 }
});

module.exports = mongoose.model('Musical Instruments', musicalInstrumentsSchema)