import { useEffect, useState } from "react";
import { fetchTopScores } from "../api/scoresApi";
export default function Scoreboard({ gameId }) {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    fetchTopScores(gameId).then(setScores).catch(() => setScores([]));
  }, [gameId]);
  return (
    <ol className="scoreboard">
      {scores.map((s) => (
        <li key={s._id}>
          {s.player}: {s.value}
