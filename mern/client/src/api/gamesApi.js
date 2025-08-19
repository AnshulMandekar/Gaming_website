import { request } from "./http";
export const fetchGames = () => request("/api/games");
export const fetchGame = (slug) => request(`/api/games/${slug}`);
