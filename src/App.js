import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from './views/MainPage.jsx'
import PokemonDetail from "./views/PokemonDetail.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/pokemon' element={<MainPage/>} />
        <Route path='/pokemon/:name' element={<PokemonDetail/>}/>
        <Route path='*' element={<Navigate to="/pokemon" />} />
      </Routes>
    </div>
  );
}

export default App;
