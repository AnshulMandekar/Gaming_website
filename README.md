# 🎮 Pixel Play — Gaming Website

**Pixel Play** is a small browser-based game hub. It bundles a set of classic
arcade and puzzle games into one website, so you can open a page, pick a game
and play it straight away, with no downloads or installs.

The site is a React single-page app with a Game Hub for browsing the games,
pages for each game, and simple sign-up and log-in screens backed by a Node.js
and MongoDB server.

---

## ✨ What you can do

- **Browse the Game Hub** — a grid of game cards with thumbnails, each linking
  to its game.
- **Play six games in the browser:**

  | Game | What it is |
  | --- | --- |
  | 🐦 **Flappy Bird** | Tap to keep a bird flying between the pipes. |
  | ❌ **Tic Tac Toe** | Classic 3×3 noughts and crosses. |
  | 🧱 **Breakout** | Bounce a ball and break every brick. |
  | 🐍 **Snake** | Eat food, grow longer, and avoid walls and yourself. |
  | 🔢 **2048** | Slide and merge tiles to reach 2048. |
  | 🏃 **Stick Hero** | Stretch a stick to bridge the gap and keep going. |

- **Sign up and log in** — account pages that talk to the backend API.
- **Use the main menu** — a quick list of every game and the hub.

---

## 🧭 Pages

| Route | Page |
| --- | --- |
| `/` | Main menu |
| `/hub` | Game Hub (all games) |
| `/2048`, `/breakout`, `/flappybird`, `/snake`, `/tiktaktoe`, `/stickHero` | Individual games |
| `/signup` | Create an account |
| `/login` | Log in |
| `/mongo` | Items list, pulled from the database |

---

## 🏗️ How it is built

```
Gaming_website/
├── gamess/          # React + Vite front end: pages, game components, styles
│   ├── src/         # App, Game Hub, MainMenu, game and auth components
│   └── public/      # Standalone HTML/CSS/JS copies of each game
├── server/          # Node.js + Express + MongoDB back end (auth, data)
├── Flexiproject/    # Earlier plain HTML/CSS/JS version of the games
├── mern/            # Work-in-progress MERN (MongoDB, Express, React, Node) layout
└── log.txt          # Plain-text log file
```

**Tech stack**

- **Front end:** React 18, React Router, Vite, Axios
- **Back end:** Node.js, Express, Mongoose (MongoDB), bcryptjs, jsonwebtoken
- **Games:** plain HTML, CSS and JavaScript (Canvas and DOM), with React wrappers

---

## 🚀 Getting started

You need **Node.js 18+** and, for the sign-up and log-in features, a running
**MongoDB** instance.

### 1. Run the front end

```bash
cd gamess
npm install
npm run dev
```

Then open the address Vite prints (usually <http://localhost:5173>).

### 2. Run the back end (optional, for accounts)

```bash
cd server
npm install
npm run dev
```

The server listens on port **3000** by default (set `PORT` to change it) and
connects to MongoDB at `mongodb://localhost:27017/gameHub`. Make sure MongoDB
is running before you start it.

---

## 🛣️ Roadmap

- Finish wiring sign-up and log-in end to end.
- Save high scores per player and show leaderboards.
- Move the games' data into the database.
- Add more games to the hub.

---

## 📄 License

No license has been chosen yet. Until one is added, all rights are reserved by
the author.
