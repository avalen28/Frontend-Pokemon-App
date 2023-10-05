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
    <div className="center-block">
      <img className="ifi-logo" src="../images/ifi-logo.png" alt="ifi logo" />
      <img
        className="pokemon-logo"
        src="../images/pokemon-logo.png"
        alt="pokemon logo"
      />
      <Link to={"/pokemon/favorites"}>Go to favorites</Link>

      <SearchInput isPokemonFirstGeneration={isPokemonFirstGeneration} />
      {pokemonsToShow && (
        <div className="center-block container-pokemonList">
          <h4 className="number-generation">Generation: 1</h4>
          <h5>{pokemonsToShow.length} pokemon</h5>
          {/* Pass all the Pokemons for the API
          as an array of strings */}
          <PokemonList pokemonList={pokemonsToShow} showFavButton={true} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
