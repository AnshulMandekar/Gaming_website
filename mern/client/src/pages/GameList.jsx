import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGames } from "../api/gamesApi";
export default function GameList() {
  const [games, setGames] = useState([]);
