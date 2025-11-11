import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGame } from "../api/gamesApi";
import Scoreboard from "../components/Scoreboard";
