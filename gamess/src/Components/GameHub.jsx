// // src/Components/GameHub.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './GameHub.css';

// function GameHub() {
//   return (
//     <div className="container">
//       <h1>Game Hub</h1>
//       <div className="game-grid">
//         <Link to="/flappybird" className="game-card">
//           <img src="https://i.postimg.cc/JzVQ8CVm/image.png" alt="Flappy Bird" />
//           <p>FLAPPY BIRD</p>
//         </Link>
//         <Link to="/tiktaktoe" className="game-card">
//           <img src="https://i.postimg.cc/1tmQYd5r/image.png" alt="tictactoe" />
//           <p>TIC TAC TOE</p>
//         </Link>
//         <Link to="/breakout" className="game-card">
//           <img src="https://i.postimg.cc/XYqBt2X3/breakout.png" alt="Breakout" />
//           <p>BREAKOUT</p>
//         </Link>
//         <Link to="/snake" className="game-card">
//           <img src="https://i.postimg.cc/bNHRqFzt/Screenshot-2024-11-07-171304.png" alt="Snake" />
//           <p>SNAKE</p>
//         </Link>
//         <Link to="/2048" className="game-card">
//           <img src="https://i.postimg.cc/kgWPMC2y/image.png" alt="2048" />
//           <p>2048</p>
//         </Link>

//         <Link to="/stickHero" className="game-card">
//           <img src="https://i.postimg.cc/bdfdZjqr/stick-man.png" alt="stickHero"/>
//           <p>Stick Hero</p>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default GameHub;
import React from 'react';
import { Link } from 'react-router-dom';
import './GameHub.css';

function GameHub() {
  return (
    <>
      <img src="https://i.postimg.cc/gJqgS302/console.png" alt="Game Hub" className="header-image" />
      <div className="game-grid">
        <Link to="/flappybird" className="game-card">
          <img src="https://i.postimg.cc/JzVQ8CVm/image.png" alt="Flappy Bird" />
          <p>FLAPPY BIRD</p>
        </Link>
        <Link to="/tiktaktoe" className="game-card">
          <img src="https://i.postimg.cc/1tmQYd5r/image.png" alt="tictactoe" />
          <p>TIC TAC TOE</p>
        </Link>
        <Link to="/breakout" className="game-card">
          <img src="https://i.postimg.cc/XYqBt2X3/breakout.png" alt="Breakout" />
          <p>BREAKOUT</p>
        </Link>
      </div>
      <div className="game-grid">
        <Link to="/snake" className="game-card">
          <img src="https://i.postimg.cc/bNHRqFzt/Screenshot-2024-11-07-171304.png" alt="Snake" />
          <p>SNAKE</p>
        </Link>
        <Link to="/2048" className="game-card">
          <img src="https://i.postimg.cc/kgWPMC2y/image.png" alt="2048" />
          <p>2048</p>
        </Link>
        <Link to="/stickHero" className="game-card">
          <img src="https://i.postimg.cc/bdfdZjqr/stick-man.png" alt="stickHero" />
          <p>Stick Hero</p>
        </Link>
      </div>
    </>
  );
}

export default GameHub;
