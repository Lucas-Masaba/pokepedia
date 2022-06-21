import React, { useState } from "react";
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
    <div>
      {pokemonTypeError && <>Oh no, there was an error</>}
      {pokemonTypeLoading && <>Loading...</>}
      {pokemonTypeData && (
        <>
          <select value={type} onChange={handleChange}>
            <option value="normal">normal</option>
            <option value="fire">fire</option>
            <option value="ice">ice</option>
          </select>

          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search_bar"
            type="search"
            placeholder="Search..."
          />




          <ul className="grid gap-4 p-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
                  <li className="flex items-center justify-between flex-col shadow-xl border-2 h-[300px] w-[100%] p-10 m-30 rounded-xl hover:shadow-cyan-500">
                    <Images pokeName={poke.pokemon.name} />
      
                    <p>{poke.pokemon.name}</p>
                  </li>
                </Link>
              ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PokemonType;
