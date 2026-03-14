const Game = require("./models/Game");
const { connectDb } = require("./db");
const games = [
  { slug: "2048", title: "2048", path: "/2048/2048.html" },
  { slug: "breakout", title: "Breakout", path: "/breakout/breakout.html" },
  { slug: "flappybird", title: "Flappy Bird", path: "/flappybird/flappybird.html" },
