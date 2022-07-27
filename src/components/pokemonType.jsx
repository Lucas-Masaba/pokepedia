import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useGetPokemonByTypeQuery,
  useGetAllTypesQuery,
} from "../redux/pokemon/pokemon";
import Images from "./pokeImage";
import Header from "./header";
import colorChange from "../helper_functions/color_changer";
const PokemonType = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("normal");

  const {
    data: pokemonTypeData,
    error: pokemonTypeError,
    isLoading: pokemonTypeLoading,
  } = useGetPokemonByTypeQuery(type);

  const { data: allTypesData } = useGetAllTypesQuery();

  const handleChange = (event) => {
    setType(event.target.value);
  };


  return (
    <div>
      {pokemonTypeError && <>Oh no, there was an error</>}
      {pokemonTypeLoading && (
        <div className="grid place-items-center h-screen">
          <div className="animate-pulse  rounded-full h-32 w-32 border-b-2 ">
            <img src="/pokeball.png" alt="" />
          </div>
        </div>
      )}
      {pokemonTypeData && (
        <div>
          <Header />
          <main>
            <div className="flex flex-col md:flex-row font-Poppins p-5">
              <h3 className="text-gray-500 text-center md:mr-1">
                Select A Pokemon type
              </h3>
              {allTypesData && (
                <select
                  value={type}
                  onChange={handleChange}
                  className=" bg-gray-200 rounded-sm outline-none focus:ring-cyan-400"
                >
                  {allTypesData.results.map((typeName) => (
                    <option value={typeName.name}>{typeName.name}</option>
                  ))}
                </select>
              )}

              {/* <div className="flex justify-center mt-3 "> */}
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-3 md:ml-2 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                type="search"
                placeholder="Search Pokemon..."
              />
              {/* </div> */}
            </div>
            <ul className=" bg-gray-200 grid gap-4 p-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
                    <li
                      style={colorChange(type)}
                      className={` flex items-center justify-between flex-col shadow-xl border-2 h-[300px] w-[100%] p-10 m-30 rounded-md transition ease-in-out delay-150 hover:shadow-cyan-500 hover:-translate-y-1 ${colorChange(
                        type
                      )}`}
                    >
                      <Images pokeName={poke.pokemon.name} />

                      <p className=" font-bold font-Mochiy text-xl">
                        {poke.pokemon.name.toUpperCase()}
                      </p>
                    </li>
                  </Link>
                ))}
            </ul>
          </main>
        </div>
      )}
    </div>
  );
};

export default PokemonType;
