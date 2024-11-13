// src/Components/GameSnake.jsx
import React from 'react';

function GameSnake() {
  return (
    <iframe
      src="/snake/snake.html"
      title="Snake Game"
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

export default GameSnake;
