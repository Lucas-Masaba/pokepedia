import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { useGetPokemonByNameQuery } from './redux/pokemon/pokemon';

import './App.css';

const App = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('pidgey');

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}

    </div>
  );
};

export default App;
