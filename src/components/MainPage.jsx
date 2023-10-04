import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard.jsx";
import axios from "axios";

const MainPage = () => {
  const [allPokemons, setAllPokemons] = useState(null);
  const getPokemonFromApi = async () => {
    try {
      const responseFromTheApi = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );
      setAllPokemons(responseFromTheApi.data.results);
    } catch (error) {
      console.error("this is the error", error);
    }
  };
  useEffect(() => {
    getPokemonFromApi();
  }, []);
  return (
    <div>
      {allPokemons && (
        <div>
          <p>IMMFLY</p>
          <h2>Pokemon</h2>
          <p>Generation: 1</p>
          <p>{allPokemons.length} pokemon</p>
          {allPokemons.map((pokemon, i) => (
            <PokemonCard pokemon={pokemon} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
