const mongoose = require('mongoose')

const musicalGenersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    musicalGener: { type: String, required: true, min: 2, max: 60 }
});

module.exports = mongoose.model('Musical Geners', musicalGenersSchema)