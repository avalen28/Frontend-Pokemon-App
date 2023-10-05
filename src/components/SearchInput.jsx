import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

const SearchInput = ({ isPokemonFirstGeneration }) => {
  const [pokemonToFind, setPokemonToFind] = useState("");
  const navigate = useNavigate();

  const handlePokemonInState = (e) => {
    setPokemonToFind(e.target.value);
  };
  const handleSearchPokemon = () => {
    const result = isPokemonFirstGeneration(pokemonToFind);
    if (result) {
      navigate(`/pokemon/${pokemonToFind}`);
    } else {
      toast.error("sorry! Pokémon not found, try again!");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Find your pokemon"
        value={pokemonToFind}
        onChange={handlePokemonInState}
        required
      />
      <button onClick={handleSearchPokemon}>Search!</button>
    </div>
  );
};

SearchInput.propTypes = {
  isPokemonFirstGeneration: PropTypes.func,
};

export default SearchInput;
