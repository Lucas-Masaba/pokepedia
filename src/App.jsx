import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Pokemon from "./components/pokemon";
import PokemonType from "./components/pokemonType";
import SignUp from "./components/Signup";

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<PokemonType />} />
        <Route path="/details/:name" element={<Pokemon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
    </Router>
  </div>
);

export default App;
