import React from "react";
import { Link } from "react-router-dom";
import {firstUpperCase} from "../utils/functions"
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  const name = pokemon;
  return (
    <Link to={`/pokemon/${name}`}>
    <div>
      <img
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
        alt={`pokemon ${name}`}
      />
      <p>{firstUpperCase(name)}</p>
    </div>
    </Link>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.string,
};

export default PokemonCard;
