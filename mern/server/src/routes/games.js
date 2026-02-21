const express = require("express");
const Game = require("../models/Game");
const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
    const games = await Game.find().sort({ title: 1 });
    res.json(games);
  } catch (err) {
    next(err);
  }
});
router.get("/:slug", async (req, res, next) => {
  try {
