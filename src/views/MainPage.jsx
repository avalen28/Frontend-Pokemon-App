import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import SearchInput from "../components/SearchInput";

const MainPage = () => {
  const [pokemonsToShow, setPokemonsToShow] = useState(null);

  const getPokemonsFromApi = async () => {
    try {
      const responseFromTheApi = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );
      const pokemonForArr = responseFromTheApi.data.results;
      const pokemonNamesInArr = pokemonForArr.map((pokemon) => pokemon.name);
      setPokemonsToShow(pokemonNamesInArr);
    } catch (error) {
      console.error("this is the error", error);
    }
  };

  const isPokemonFirstGeneration = (pokemonToCheck) => {
    return pokemonsToShow.includes(pokemonToCheck);
  };

  useEffect(() => {
    getPokemonsFromApi();
  }, []);
  return (
    <div>
      <p>IMMFLY</p>
      <h2>Pokemon</h2>
      <p>Generation: 1</p>
      <Link to={"/pokemon/favorites"}>Go to favorites</Link>

      <SearchInput isPokemonFirstGeneration={isPokemonFirstGeneration} />
      {pokemonsToShow && (
        <div>
          <p>{pokemonsToShow.length} pokemon</p>
          {/* Pass all the Pokemons for the API
          as an array of strings */}
          <PokemonList pokemonList={pokemonsToShow} showFavButton={true} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
