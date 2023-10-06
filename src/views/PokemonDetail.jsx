import React, { useState, useEffect } from "react";
import { firstUpperCase } from "../utils/functions";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();
  const getPokemonFromApi = async () => {
    try {
      const responseFromTheApi = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      setPokemon(responseFromTheApi.data);
    } catch (error) {
      console.error("this is the error", error);
    }
  };
  useEffect(() => {
    getPokemonFromApi();
  }, []);
  return (
    <div className="pokemon-detail centered-block">
      {pokemon && (
        <div className="pokemon-data centered-block">
          <button onClick={() => navigate(-1)}>X</button>
          <img
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
            alt={`pokemon ${name}`}
          />
          <h3 className="pokemon-name">{firstUpperCase(name)}</h3>
          <p>
            <span className="data-title">ID:</span> {pokemon.id}
          </p>
          <p>
            <span className="data-title">Type: </span>
            {pokemon.types.map((elem) => (
              <span key={`type ${elem.type.name}`}>
                {firstUpperCase(elem.type.name)}{" "}
              </span>
            ))}
          </p>
          <p>
            <span className="data-title">Height: </span>
            {pokemon.height}
          </p>
          <div>
            <p className="abilities">
              <span className="data-title">Habilities</span>
            </p>
            <ul>
              {pokemon.abilities.map((elem) => (
                <li
                  className="list-items"
                  key={`hability ${elem.ability.name}`}
                >
                  {firstUpperCase(elem.ability.name)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
