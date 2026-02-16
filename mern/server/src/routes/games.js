const express = require("express");
const Game = require("../models/Game");
const router = express.Router();
router.get("/", async (req, res, next) => {
  try {
