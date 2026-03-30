// Loads the game list once for the Game Hub.
import { useEffect, useState } from "react";
import { fetchGames } from "../api/gamesApi";
export function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchGames()
      .then(setGames)
      .catch(() => setGames([]))
      .finally(() => setLoading(false));
  }, []);
  return { games, loading };
}
export default useGames;
