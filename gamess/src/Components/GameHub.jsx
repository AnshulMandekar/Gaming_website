// src/Components/GameHub.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './GameHub.css';

function GameHub() {
  return (
    <div className="container">
      <h1>Game Hub</h1>
      <div className="game-grid">
        <Link to="/flappybird" className="game-card">
          <img src="https://i.postimg.cc/JzVQ8CVm/image.png" alt="Flappy Bird" />
          <p>FLAPPY BIRD</p>
        </Link>
        <Link to="/tiktaktoe" className="game-card">
          <img src="https://i.postimg.cc/1tmQYd5r/image.png" alt="tictactoe" />
          <p>TIC TAC TOE</p>
        </Link>
        <Link to="/breakout" className="game-card">
          <img src="https://i.postimg.cc/XYqBt2X3/breakout.png" alt="Breakout" />
          <p>BREAKOUT</p>
        </Link>
        <Link to="/snake" className="game-card">
          <img src="https://i.postimg.cc/bNHRqFzt/Screenshot-2024-11-07-171304.png" alt="Snake" />
          <p>SNAKE</p>
        </Link>
        <Link to="/2048" className="game-card">
          <img src="https://i.postimg.cc/kgWPMC2y/image.png" alt="2048" />
          <p>2048</p>
        </Link>
      </div>
    </div>
  );
}

export default GameHub;
