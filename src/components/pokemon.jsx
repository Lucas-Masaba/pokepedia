import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useGetPokemonByNameQuery, useGetPokemonDescriptionQuery } from "../redux/pokemon/pokemon";
import { BiArrowBack as BackArrow } from "react-icons/bi";
import colorChange from "../helper_functions/color_changer";
const Pokemon = () => {
  const { name } = useParams();

  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  const { data: speciesData, error: speciesError, isLoading: speciesLoading } = useGetPokemonDescriptionQuery(name);


  return (
    <div>
      {error && <>Oh no, there was an error</>}
      {isLoading && <>Loading...</>}
      {data && (
        <div className="font-Poppins" style={colorChange(data.types[0].type.name)}>
          <section style={colorChange(data.types[0].type.name)}>
            <Link className="text-[25px]" to={`/`}>
              <BackArrow />
            </Link>
            <div className="flex flex-col items-center">
              <h3 className="font-bold font-Mochiy">{data.species.name.toUpperCase()}</h3>
              <img
                className="w-[250px]"
                src={data.sprites.other["official-artwork"]["front_default"]}
                alt={data.species.name}
              />
            </div>
          </section>
          <section className="rounded-t-[20px] bg-white text-black p-3 pt-6">
            <div className="pl-2">
              { speciesData && (

            <p className="pb-2 md:flex md:justify-center">{speciesData.flavor_text_entries[0].flavor_text}</p>
              ) }
            </div>
            <div className="pr-2">
              <h1 className="text-[22px] text-orange-600 font-bold md:flex md:justify-center">Data</h1>
              
              <ul className="pt-1 md:flex md:justify-center">
                <div className="md:pr-2">
                <li>
                  <span className="font-bold">Abilities: </span>
                  {data.abilities.map((ability, index) => (
                    <>
                      <span key={index}>{ability.ability.name} </span>
                    </>
                  ))}
                </li>
                <li>
                  <span className="font-bold">HP: </span>
                  {data.stats[0].base_stat}
                </li>
                <li>
                  <span className="font-bold">Attack: </span>
                  {data.stats[1].base_stat}
                </li>
                <li>
                  <span className="font-bold">Defense: </span>
                  {data.stats[2].base_stat}
                </li>
                <li>
                  <span className="font-bold">Special Attack: </span>
                  {data.stats[3].base_stat}
                </li>
                <li>
                  <span className="font-bold">Special Defense: </span>
                  {data.stats[4].base_stat}
                </li>
                </div>
                <div className="md:pl-2">
                <li>
                  <span className="font-bold">Speed: </span>
                  {data.stats[5].base_stat}
                </li>
                <li>
                  <span className="font-bold">Height: </span>
                  <span>{data.height}</span>
                </li>
                <li>
                  <span className="font-bold">Weight: </span>
                  <span>{data.weight}</span>
                </li>
                <li>
                  <span className="font-bold">Types: </span>
                  {data.types.map((aType, index) => (
                    <>
                      <span key={index} style={colorChange(aType.type.name)} className="rounded-full pr-2 pl-2">{aType.type.name} </span>
                    </>
                  ))}
                </li>
                </div>
              </ul>
            </div>
          </section>
        </div>
      )}
            {/* <p className="pb-2">{speciesData["flavor_text_entries"][0]["flavor_text"]}</p> */}

    </div>
  );
};

export default Pokemon;
