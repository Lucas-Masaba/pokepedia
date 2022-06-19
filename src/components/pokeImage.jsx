import React from "react";
import { useGetPokemonByNameQuery } from "../redux/pokemon/pokemon";

const Images = ({ pokeName }) => {
  const { data, isLoading, error } = useGetPokemonByNameQuery(pokeName);
  return (
    <div className="border-black">
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

export default Images;
