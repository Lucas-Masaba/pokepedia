import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetPokemonByTypeQuery,
  useGetAllTypesQuery,
} from "../redux/pokemon/pokemon";
import Images from "./pokeImage";

const PokemonType = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("normal");

  const {
    data: pokemonTypeData,
    error: pokemonTypeError,
    isLoading: pokemonTypeLoading,
  } = useGetPokemonByTypeQuery(type);

  const {
    data: allTypesData,
  } = useGetAllTypesQuery();

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className=" bg-blue-800">
      {pokemonTypeError && <>Oh no, there was an error</>}
      {pokemonTypeLoading && (
        <div class=" flex justify-center items-center">
          <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
            {" "}
          </div>
        </div>
      )}
      {pokemonTypeData && (
        <>
          {allTypesData && (
            <select value={type} onChange={handleChange}>
              {allTypesData.results.map((typeName) => (
                <option value={typeName.name}>{typeName.name}</option>
              ))}
            </select>
          )}

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
                  <li className="flex items-center justify-between flex-col shadow-xl border-2 h-[300px] w-[100%]  bg-yellow-500 p-10 m-30 rounded-xl transition ease-in-out delay-150 hover:shadow-cyan-500 hover:-translate-y-1">
                    <Images pokeName={poke.pokemon.name} />

                    <p className="text-white font-bold font-Mochiy text-xl">
                      {poke.pokemon.name.toUpperCase()}
                    </p>
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
