import React from 'react';

function Game2048() {
  return (
    <iframe
      src="/2048/2048.html"
      title="2048 Game"
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

export default Game2048;

