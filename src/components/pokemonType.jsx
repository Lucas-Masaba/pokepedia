import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetPokemonByTypeQuery } from "../redux/pokemon/pokemon";
import Images from "./pokeImage";

const PokemonType = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("normal");

  const {
    data: pokemonTypeData,
    error: pokemonTypeError,
    isLoading: pokemonTypeLoading,
  } = useGetPokemonByTypeQuery(type);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="App">
      {pokemonTypeError && <>Oh no, there was an error</>}
      {pokemonTypeLoading && <>Loading...</>}
      {pokemonTypeData && (
        <>
          <select value={type} onChange={handleChange}>
            <option value="fire">Choose...</option>
            <option value="fire">fire</option>
            <option value="ice">ice</option>
          </select>

          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search_bar"
            type="search"
            placeholder="Search..."
          />

          {pokemonTypeData.pokemon
            .filter((poke) => {
              if (searchTerm == "") {
                return poke;
              } else if (
                poke.pokemon.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return poke;
              }
            })
            .map((poke, index) => (
              <Link
                activeclassname="active link"
                key={index}
                to={`/details/${poke.pokemon.name}`}
              >
                <ul class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  <li>
                    <Images pokeName={poke.pokemon.name} />

                    <h1>{poke.pokemon.name}</h1>
                  </li>
                </ul>
              </Link>
            ))}
        </>
      )}
    </div>
  );
};



export default PokemonType;
