import { request } from "./http";
export const fetchGames = () => request("/api/games");
