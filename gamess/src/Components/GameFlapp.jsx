// src/Components/GameFlappyBird.jsx
import React from 'react';

function GameFlappyBird() {
  return (
    <iframe
      src="/flappybird/flappybird.html"
      title="Flappy Bird Game"
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
        backgroundColor: "white",
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    />
  );
}

export default GameFlappyBird;
