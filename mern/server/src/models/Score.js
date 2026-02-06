const mongoose = require("mongoose");
const scoreSchema = new mongoose.Schema({
  game: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
