const Game = require("./models/Game");
const { connectDb } = require("./db");
const games = [
  { slug: "2048", title: "2048", path: "/2048/2048.html" },
  { slug: "breakout", title: "Breakout", path: "/breakout/breakout.html" },
  { slug: "flappybird", title: "Flappy Bird", path: "/flappybird/flappybird.html" },
  { slug: "snake", title: "Snake", path: "/snake/snake.html" },
  { slug: "stickhero", title: "Stick Hero", path: "/stickHero/stickHero.html" },
  { slug: "tictactoe", title: "Tic Tac Toe", path: "/tiktaktoe/tiktaktoe.html" },
];
async function seed() {
  await connectDb();
  for (const game of games) {
    await Game.updateOne({ slug: game.slug }, game, { upsert: true });
  }
  console.log(`Seeded ${games.length} games`);
