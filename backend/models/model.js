const mongoose = require("mongoose");

const RuneSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const Rune = mongoose.model("Rune", RuneSchema);

module.exports = { Rune };
