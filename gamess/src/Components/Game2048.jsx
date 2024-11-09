// src/Components/Game2048.jsx
import React from 'react';

function Game2048() {
  return (
    <div className="game-container">
      <iframe
        src="/2048/2048.html"
        title="2048 Game"
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
    </div>
  );
}

export default Game2048;
