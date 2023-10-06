import React from "react";
import PokemonList from "../components/PokemonList.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Favorites = () => {
  const [favPokemons, setFavPokemons] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentPokemonsFav = localStorage.getItem("favPokemons");
    if (
      currentPokemonsFav !== null &&
      [currentPokemonsFav].filter((elem) => elem !== "").length > 0
    ) {
      const pokemonStringToArr = currentPokemonsFav.split(",");
      setFavPokemons(pokemonStringToArr.filter((pokemon) => pokemon !== ""));
    }
  }, []);
  return (
    <div className="centered-block favorites">
      <button onClick={() => navigate(-1)} className="back-btn">←</button>
      <div className="centered-block container-pokemonList">
        {favPokemons && (
          <PokemonList pokemonList={favPokemons} showFavButton={false} />
        )}
        {favPokemons === null && <p>No pokemons added</p>}
      </div>
    </div>
  );
};

export default Favorites;
