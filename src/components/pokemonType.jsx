import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetPokemonByTypeQuery,
  useGetPokemonByNameQuery,
} from "../redux/pokemon/pokemon";

const PokemonType = () => {

  const [searchTerm, setSearchTerm] = useState("")

  const {
    data: pokemonTypeData,
    error: pokemonTypeError,
    isLoading: pokemonTypeLoading,
  } = useGetPokemonByTypeQuery("normal");



  return (
    <div className="App">
      {pokemonTypeError && <>Oh no, there was an error</>}
      {pokemonTypeLoading && <>Loading...</>}
      {pokemonTypeData && (
        <>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search_bar"
            type="search"
            placeholder="Search..."
          />

          {pokemonTypeData.pokemon.filter((poke) => {
            if(searchTerm == "") {
              return poke
            } else if(poke.pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return poke
            } 
          }).map((poke, index) => (
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
  const { data, isLoading, error } = useGetPokemonByNameQuery(pokeName);
  return (
    <div>
      {error && <>Oops, something went wrong</>}
      {isLoading && <>Loading...</>}
      {data && (
        <img
          src={
            data.sprites.versions["generation-v"]["black-white"]["animated"][
              "front_shiny"
            ]
              ? data.sprites.versions["generation-v"]["black-white"][
                  "animated"
                ]["front_shiny"]
              : data.sprites.front_shiny
          }
        />
      )}
    </div>
  );
};

export default PokemonType;
