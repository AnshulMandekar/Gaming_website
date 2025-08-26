import { request } from "./http";
export const submitScore = (score) =>
  request("/api/scores", { method: "POST", body: JSON.stringify(score) });
export const fetchTopScores = (gameId) => request(`/api/scores/${gameId}`);
