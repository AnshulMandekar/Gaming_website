import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGame } from "../api/gamesApi";
import Scoreboard from "../components/Scoreboard";
export default function GameDetail() {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  useEffect(() => {
    fetchGame(slug).then(setGame).catch(() => setGame(null));
  }, [slug]);
  if (!game) return <p>Loading game...</p>;
  return (
    <main>
      <h1>{game.title}</h1>
      <iframe src={game.path} title={game.title} />
      <Scoreboard gameId={game._id} />
    </main>
  );
}
