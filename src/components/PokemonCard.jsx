import React from "react";
import {firstUpperCase} from "../utils/functions"
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  const { name } = pokemon;
  return (
    <div>
      <img
        src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
        alt={`pokemon ${name}`}
      />
      <p>{firstUpperCase(name)}</p>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonCard;
