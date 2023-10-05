import React from "react";
import { Link } from "react-router-dom";
import { firstUpperCase } from "../utils/functions";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  const name = pokemon;

  const addPokemonToFav = () => {
    // this is what currently have on the local storage.
    const currentPokemonsFav = localStorage.getItem("favPokemons");

    let pokemonArr;

    if (currentPokemonsFav === null) {
      pokemonArr = [];
    } else {
      pokemonArr = currentPokemonsFav.split(",");
    }

    if (pokemonArr.includes(name)) {
      pokemonArr = pokemonArr.filter((elem) => elem !== name);
    } else {
      pokemonArr.push(name);
    }
    localStorage.setItem("favPokemons", pokemonArr);
  };

  return (
    <div>
      <button onClick={addPokemonToFav}>Add to Fav</button>
      <br />
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
};

export default PokemonCard;
