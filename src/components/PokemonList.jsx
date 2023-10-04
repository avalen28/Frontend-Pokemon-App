import React from "react";
import PokemonCard from "../components/PokemonCard.jsx";
import PropTypes from "prop-types";

const PokemonList = ({ pokemonList }) => {
  return (
    <>
      {pokemonList.map((pokemon, i) => (
        <PokemonCard pokemon={pokemon} key={i} />
      ))}
    </>
  );
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array,
};

export default PokemonList;
