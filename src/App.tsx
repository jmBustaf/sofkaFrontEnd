import React from 'react';
import './App.css';
import Home from './modules/Home'
import Game from './modules/Game';
import History from './modules/History';
import Register from './modules/Register';
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/history" element={<History />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App;