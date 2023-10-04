import React from 'react';
import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard.jsx";
import PropTypes from "prop-types";

const PokemonList = ({ pokemonList }) => {
    return (
      <>
        {pokemonList.map((pokemon, i) => (
          <Link to={`/pokemon/${pokemon.name}`} key={i}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </>
    );
};

PokemonList.propTypes = {
  pokemonList: PropTypes.object,
};

export default PokemonList;