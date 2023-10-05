import React from "react";
import PokemonList from "../components/PokemonList.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Favorites = () => {
  const [favPokemons, setFavPokemons] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentPokemonsFav = localStorage.getItem("favPokemons");
    if (currentPokemonsFav !== null) {
      setFavPokemons(currentPokemonsFav.split(","));
    }
  }, []);
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      {favPokemons && (
        <PokemonList pokemonList={favPokemons} showFavButton={false} />
      )}
    </div>
  );
};

export default Favorites;
