const express = require("express");
const cors = require("cors");
const { port, clientOrigin } = require("./config");
const { connectDb } = require("./db");
const gamesRouter = require("./routes/games");
const scoresRouter = require("./routes/scores");
const errorHandler = require("./middleware/errorHandler");
