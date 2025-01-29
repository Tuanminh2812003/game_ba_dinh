import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Layouts/Home";
import LayoutDefault from "./Layouts/LayoutDefault";
import Game from "./Layouts/Game";
import Card1 from "./Layouts/Card1";
import Card2 from "./Layouts/Card2";
import Leaderboard from "./Layouts/Leaderboard";

function App() {
  const location = useLocation(); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Routes>
        {/* Nếu đang ở /game và là mobile => Không render LayoutDefault */}
        {location.pathname === "/game" && isMobile ? (
          <Route path="/game" element={<Game />} />
        ) : (
          <Route path="/" element={<LayoutDefault />}>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/card1" element={<Card1 />} />
            <Route path="/card2" element={<Card2 />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
