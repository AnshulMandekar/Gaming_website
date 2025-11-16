import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGame } from "../api/gamesApi";
import Scoreboard from "../components/Scoreboard";
export default function GameDetail() {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
