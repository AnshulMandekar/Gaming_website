// src/Components/GameTicTacToe.jsx
import React from 'react';

function GameTicTacToe() {
  return (
    <div className="game-container">
      <iframe
        src="/tiktaktoe/tiktaktoe.html"
        title="Tic Tac Toe Game"
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
    </div>
  );
}

export default GameTicTacToe;
