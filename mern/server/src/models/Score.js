const mongoose = require("mongoose");
const scoreSchema = new mongoose.Schema({
  game: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
  player: { type: String, default: "anonymous" },
  value: { type: Number, required: true, min: 0 },
  playedAt: { type: Date, default: Date.now },
});
scoreSchema.index({ game: 1, value: -1 });
module.exports = mongoose.model("Score", scoreSchema);
