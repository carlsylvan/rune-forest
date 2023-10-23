const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

const { Rune } = require("./models/model");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/runes", async (req, res) => {
  const allRunes = await Rune.find();
  return res.status(200).json(allRunes);
});

app.get("/runes/:id", async (req, res) => {
  const { id } = req.params;
  const rune = await Rune.findById(id);
  return res.status(200).json(rune);
});

app.post("/runes", async (req, res) => {
  const newRune = new Rune({ ...req.body });
  const insertedRune = await newRune.save();
  return res.status(201).json(insertedRune);
});

app.put("/runes/:id", async (req, res) => {
  const { id } = req.params;
  await Rune.updateOne({ id }, req.body);
  const updatedRune = await Rune.findById(id);
  res.status(200).json(updatedRune);
});

app.delete("/runes/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRune = await Rune.findByIdAndDelete(id);
  return res.status(200).json(deletedRune);
});

const start = async () => {
  try {
    await mongoose.connect(mongoString);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
