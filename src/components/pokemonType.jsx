import React from "react";
import { Link } from "react-router-dom";
import {
  useGetPokemonByTypeQuery,
  useGetPokemonByNameQuery,
} from "../redux/pokemon/pokemon";

const PokemonType = () => {
  const {
    data: pokemonTypeData,
    error: pokemonTypeError,
    isLoading: pokemonTypeLoading,
  } = useGetPokemonByTypeQuery("ice");

  return (
    <div className="App">
      {pokemonTypeError && <>Oh no, there was an error</>}
      {pokemonTypeLoading && <>Loading...</>}
      {pokemonTypeData && (
        <>
          {pokemonTypeData.pokemon.map((poke, index) => (
            <Link
              activeclassname="active link"
              key={index}
              to={`/details/${poke.pokemon.name}`}
            >
              <div>
                <Images pokeName={poke.pokemon.name} />

                <h1>{poke.pokemon.name}</h1>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export const Images = ({ pokeName }) => {
  const { data } = useGetPokemonByNameQuery(pokeName);
  return (
    <div>
      {data && (
        <>
          <img
            src={
              data.sprites.versions["generation-v"]["black-white"]["animated"][
                "front_shiny"
              ] ? data.sprites.versions["generation-v"]["black-white"]["animated"][
                "front_shiny"
              ] : data.sprites.front_shiny
            }
          />
        </>
      )}
    </div>
  );
};

export default PokemonType;
