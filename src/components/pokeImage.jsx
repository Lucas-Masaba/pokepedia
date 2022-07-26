import React from "react";
import { useGetPokemonByNameQuery } from "../redux/pokemon/pokemon";

const Images = ({ pokeName }) => {
  const { data, isLoading, error } = useGetPokemonByNameQuery(pokeName);
  return (
    <div className="flex items-center justify-center shadow-inner shadow-cyan-500 rounded-full h-[150px] w-[150px] bg-white">
      {error && <>Oops, something went wrong</>}
      {isLoading && (
        <img className="animate-spin" src="/pokeball.png" alt="" />
      )}
      {data && (
        <img
          
          width="100px"
          src={
            data.sprites.versions["generation-v"]["black-white"]["animated"][
              "front_shiny"
            ]
              ? data.sprites.versions["generation-v"]["black-white"][
                  "animated"
                ]["front_shiny"]
              : data.sprites.front_shiny
          }
          alt={`Image of ${pokeName}`}
        />
      )}
    </div>
  );
};

export default Images;
