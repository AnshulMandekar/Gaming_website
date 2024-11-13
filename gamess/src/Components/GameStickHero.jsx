// src/Components/GameSnake.jsx
// src/Components/StickHero.jsx
import React from 'react';

function StickHero() {
  return (
    <iframe
      src="/stickHero/stickHero.html"
      title="Stick Hero"
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

export default StickHero;

