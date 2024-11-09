// src/Components/GameSnake.jsx
import React from 'react';

function GameSnake() {
  return (
    <div className="game-container">
      <iframe
        src="/snake/snake.html"
        title="Snake Game"
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
    </div>
  );
}

export default GameSnake;
