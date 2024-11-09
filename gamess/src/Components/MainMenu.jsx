// src/Components/MainMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <div>
      <h1>Main Menu</h1>
      <ul>
        <li><Link to="/hub">Go to Game Hub</Link></li>
        <li><Link to="/2048">Play 2048</Link></li>
        <li><Link to="/breakout">Play Breakout</Link></li>
        <li><Link to="/flappybird">Play Flappy Bird</Link></li>
        <li><Link to="/snake">Play Snake</Link></li>
        <li><Link to="/tiktaktoe">Play Tic Tac Toe</Link></li>
      </ul>
    </div>
  );
}

export default MainMenu;
