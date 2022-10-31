import React from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { setToken } from "./redux/login/authSlice"
import Login from "./components/Login";
import Pokemon from "./components/pokemon";
import PokemonType from "./components/pokemonType";
import SignUp from "./components/Signup";

const App = () => {
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("token")) 

  useEffect(() => {
    if(token){

      dispatch(setToken(token));
    }
  }, [])

return (
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
}

export default App;
