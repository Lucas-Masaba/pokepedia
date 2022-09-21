import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Pokemon from "./components/pokemon";
import PokemonType from "./components/pokemonType";

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<PokemonType />} />
        <Route path="/details/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  </div>
);

export default App;
