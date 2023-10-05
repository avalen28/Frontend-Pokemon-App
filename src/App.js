import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import MainPage from './views/MainPage.jsx'
import PokemonDetail from "./views/PokemonDetail.jsx";
import './App.css';
import Favorites from './views/Favorites.jsx';

function App() {
  return (
    <div className="App center-block">
      <Toaster />
      <Routes>
        <Route path="/pokemon" element={<MainPage />} />
        <Route path="/pokemon/favorites" element={<Favorites />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="*" element={<Navigate to="/pokemon" />} />
      </Routes>
    </div>
  );
}

export default App;
