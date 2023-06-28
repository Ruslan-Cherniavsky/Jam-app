const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    match:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  userName: { type: String, required: true, min: 5, max: 30 },
  password: { type: String, required: true, min: 5, max: 30 },

  firstName: { type: String, required: true, min: 5, max: 30 },
  lastName: { type: String, required: true, min: 5, max: 30 },

  country: { type: String, required: true, min: 5, max: 30 },
  city: { type: String, required: true, min: 5, max: 30 },
  street: { type: String, min: 5, max: 130 },

  age: { type: Number, required: true, min: 10, max: 130 },
  gender: { type: String, required: true },

  musicalGaners: { type: [String] },
  musicalInstruments: { type: [String] },

  img: { type: String },
  references: { type: String, max: 300 },
  oboutMe: { type: String, max: 700 },

  createdAt: { type: Date, immutable: true, default: () => Date.now() },
  role: { type: String, default: "user", required: true },
});

module.exports = mongoose.model("User", userSchema);
