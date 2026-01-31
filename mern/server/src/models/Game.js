const mongoose = require("mongoose");
const gameSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
