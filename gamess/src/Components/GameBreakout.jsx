// src/Components/GameBreakout.jsx
import React from 'react';

function GameBreakout() {
  return (
    <div className="game-container">
      <iframe
        src="/breakout/breakout.html"
        title="Breakout Game"
        style={{ width: '100%', height: '500px', border: 'none' }}
      />
    </div>
  );
}

export default GameBreakout;
