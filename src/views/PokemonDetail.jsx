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
    <div>
      {pokemon && (
        <div>
          <button onClick={() => navigate(-1)}>X</button>
          <img
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
            alt={`pokemon ${name}`}
          />
          <p>{firstUpperCase(name)}</p>
          <p>ID: {pokemon.id}</p>
          <p>
            Type:
            {pokemon.types.map((elem) => (
              <span key={`type ${elem.type.name}`}>
                {firstUpperCase(elem.type.name)}{" "}
              </span>
            ))}
          </p>
          <p>Height: {pokemon.height}</p>
          <div>
            <p>Habilities</p>
            <ul>
              {pokemon.abilities.map((elem) => (
                <li key={`hability ${elem.ability.name}`}>
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
