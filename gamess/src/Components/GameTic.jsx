import React from 'react';

function GameTicTacToe() {
  return (
    <iframe
      src="/tiktaktoe/tiktaktoe.html"
      title="Tic Tac Toe Game"
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    />
  );
}

export default GameTicTacToe;

