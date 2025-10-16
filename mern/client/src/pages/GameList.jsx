import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGames } from "../api/gamesApi";
export default function GameList() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetchGames().then(setGames).catch(() => setGames([]));
  }, []);
  return (
    <main>
      <h1>Game Hub</h1>
