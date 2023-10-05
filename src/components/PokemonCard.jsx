import React from "react";
import { Link } from "react-router-dom";
import { firstUpperCase } from "../utils/functions";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  const name = pokemon;
  return (
    <div>
      <button>Add to Fav</button>
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
