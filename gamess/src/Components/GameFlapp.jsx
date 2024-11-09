// src/Components/GameFlappyBird.jsx
import React from 'react';

function GameFlappyBird() {
  return (
    <div className="game-container">
      <iframe
        src="/flappybird/flappybird.html"
        title="Flappy Bird Game"
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
    </div>
  );
}

export default GameFlappyBird;
