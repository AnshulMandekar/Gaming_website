const express = require("express");
const Score = require("../models/Score");
const router = express.Router();
router.post("/", async (req, res, next) => {
