import { useEffect, useState } from "react";
import { fetchTopScores } from "../api/scoresApi";
export default function Scoreboard({ gameId }) {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    fetchTopScores(gameId).then(setScores).catch(() => setScores([]));
