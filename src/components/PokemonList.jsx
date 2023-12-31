import React from "react";
import PokemonCard from "../components/PokemonCard.jsx";
import PropTypes from "prop-types";

//The components takes an array of Pokemon with
// his name and personal url (everything in an object)
const PokemonList = ({ pokemonList, showFavButton }) => {
  return (
    <div className="pokemon-list centered-block">
      {/* This map take every pokemon (object) in the array
of pokemons and pass the name to the PokemonCard */}
      {pokemonList.map((pokemon, i) => (
        <PokemonCard pokemon={pokemon} showFavButton={showFavButton} key={i} />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array,
  showFavButton: PropTypes.bool,
};

export default PokemonList;
