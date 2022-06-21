import React from "react";
import { useParams } from "react-router";
import { useGetPokemonByNameQuery } from "../redux/pokemon/pokemon";

const Pokemon = () => {
  const { name } = useParams();

  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <div>
      {error && <>Oh no, there was an error</>}
      {isLoading && <>Loading...</>}
      {data && (
        <>
          <h3>{data.species.name}</h3>
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
            alt={data.species.name}
          />
        </>
      )}
    </div>
  );
};

export default Pokemon;
