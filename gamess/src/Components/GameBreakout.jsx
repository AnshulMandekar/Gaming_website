// src/Components/GameBreakout.jsx
import React from 'react';

function GameBreakout() {
  return (
    <iframe
      src="/breakout/breakout.html"
      title="Breakout Game"
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
        backgroundColor: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    />
  );
}

export default GameBreakout;
