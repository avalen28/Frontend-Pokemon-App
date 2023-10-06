import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firstUpperCase } from "../utils/functions";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon, showFavButton }) => {
  const name = pokemon;

  const [isFavorite, setIsFavorite] = useState(false);

  const getFavPokemonsToChangeFavOption = () => {
    const currentPokemonsFav = localStorage.getItem("favPokemons");

    let pokemonArr;

    if (currentPokemonsFav !== null) {
      pokemonArr = currentPokemonsFav.split(",");
      const result = pokemonArr.filter((pokemon) => pokemon === name);
   result.length > 0 ? setIsFavorite(true) : setIsFavorite(false)
    }
  };

  const addPokemonToFav = () => {
    setIsFavorite(!isFavorite)
    // this is what currently have on the local storage.
    const currentPokemonsFav = localStorage.getItem("favPokemons");

    let pokemonArr;

    if (currentPokemonsFav === null) {
      pokemonArr = [];
    } else {
      pokemonArr = currentPokemonsFav.split(",");
    }

    if (pokemonArr.includes(name)) {
      //removes pokemon from fav.
      pokemonArr = pokemonArr.filter((elem) => elem !== name);
    } else {
      //adds pokemon to fav.
      pokemonArr.push(name);
    }
    localStorage.setItem("favPokemons", pokemonArr);
  };
  useEffect(() => {
    getFavPokemonsToChangeFavOption()
  }, []);
  return (
    <div>
      {showFavButton && isFavorite === false && (
        <button onClick={addPokemonToFav}>Add to Fav</button>
      )}
      <br />
      {showFavButton && isFavorite === true && (
        <button onClick={addPokemonToFav}>removes</button>
      )}
      <Link to={`/pokemon/${name}`}>
        <img
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
          alt={`pokemon ${name}`}
        />
        <p>{firstUpperCase(name)}</p>
      </Link>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.string,
  showFavButton: PropTypes.bool,
};

export default PokemonCard;
