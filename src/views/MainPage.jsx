import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "../components/PokemonList";

const MainPage = () => {
  const [allPokemons, setAllPokemons] = useState(null);
  const getPokemonsFromApi = async () => {
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
    getPokemonsFromApi();
  }, []);
  return (
    <div>
      {allPokemons && (
        <div>
          <p>IMMFLY</p>
          <h2>Pokemon</h2>
          <p>Generation: 1</p>
          <p>{allPokemons.length} pokemon</p>
          <PokemonList pokemonList={allPokemons} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
