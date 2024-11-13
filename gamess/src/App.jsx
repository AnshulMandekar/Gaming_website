import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './Components/MainMenu';
import GameHub from './Components/GameHub';
import Game2048 from './Components/Game2048';
import GameBreakout from './Components/GameBreakout';
import GameFlappyBird from './Components/GameFlapp';
import GameSnake from './Components/GameSnake';
import GameTicTacToe from './Components/GameTic';
import StickHero from './Components/GameStickHero';
import './App.css';
import ItemList from './Components/ItemList';
import SignupForm from './Components/SignUp';
import LoginForm from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/hub" element={<GameHub />} />
        <Route path="/2048" element={<Game2048 />} />
        <Route path="/breakout" element={<GameBreakout />} />
        <Route path="/flappybird" element={<GameFlappyBird />} />
        <Route path="/snake" element={<GameSnake />} />
        <Route path="/tiktaktoe" element={<GameTicTacToe />} />
        <Route path="/stickHero" element={<StickHero/>} />
        <Route path="/mongo" element={<ItemList />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;

