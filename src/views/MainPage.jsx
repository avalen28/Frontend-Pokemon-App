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
    <div className="main-page centered-block">
      <Link to={"/pokemon/favorites"} className="fav-link">
        ★
      </Link>
      <img
        className="ifi-logo"
        src="https://startupxplore.com/uploads/ff808081535af45e01535ff2101a01c9-large.png"
        alt="ifi logo"
      />
      <img
        className="pokemon-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
        alt="pokemon logo"
      />
      {pokemonsToShow && (
        <div className="centered-block container-pokemonList">
          <div>
            <h4 className="pokemon-generation">Generation 1</h4>
            <h5 className="pokemon-amount">{pokemonsToShow.length} pokemon</h5>
          </div>
          <SearchInput isPokemonFirstGeneration={isPokemonFirstGeneration} />

          {/* Pass all the Pokemons for the API
          as an array of strings */}
          <PokemonList pokemonList={pokemonsToShow} showFavButton={true} />
        </div>
      )}
    </div>
  );
};

export default MainPage;
