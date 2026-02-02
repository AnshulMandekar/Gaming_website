const mongoose = require("mongoose");
const gameSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  thumbnail: String,
  path: { type: String, required: true },
