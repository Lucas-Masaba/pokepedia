import React from 'react';
import { useGetPokemonByTypeQuery } from '../redux/pokemon/pokemon';

const PokemonType = () => {
  const { data, error, isLoading } = useGetPokemonByTypeQuery('fire');

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.name}
        </>
      ) : null}

    </div>
  );
};

export default PokemonType;
