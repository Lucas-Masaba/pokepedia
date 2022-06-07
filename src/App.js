import React from 'react';
import Pokemon from './components/pokemon';
import PokemonType from './components/pokemonType';

const App = () => (
  <div className="App">
    <PokemonType />
    <Pokemon />
  </div>
);

export default App;
