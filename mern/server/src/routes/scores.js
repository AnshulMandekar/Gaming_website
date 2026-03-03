const express = require("express");
const Score = require("../models/Score");
const router = express.Router();
router.post("/", async (req, res, next) => {
  try {
    const score = await Score.create(req.body);
    res.status(201).json(score);
  } catch (err) {
    next(err);
  }
