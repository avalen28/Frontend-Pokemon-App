import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from './components/MainPage.jsx'
import PokemonDetail from './components/PokemonDetail.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/pokemon' element={<MainPage/>} />
        <Route path='*' element={<Navigate to="/pokemon" />} />
        <Route path='/pokemon/:Id' element={<PokemonDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
