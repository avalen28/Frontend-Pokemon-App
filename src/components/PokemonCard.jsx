import React from "react";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  const { name } = pokemon;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};
export default PokemonCard;
