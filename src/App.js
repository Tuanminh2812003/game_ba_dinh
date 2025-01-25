import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home';
import LayoutDefault from './Layouts/LayoutDefault';
import Game from './Layouts/Game';
import Card1 from './Layouts/Card1';
import Card2 from './Layouts/Card2';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/card1" element={<Card1 />} />
          <Route path="/card2" element={<Card2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
