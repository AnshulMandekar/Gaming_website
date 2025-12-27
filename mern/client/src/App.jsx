import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameList from "./pages/GameList";
import GameDetail from "./pages/GameDetail";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/games/:slug" element={<GameDetail />} />
      </Routes>
