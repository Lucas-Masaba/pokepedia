import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useGetPokemonByNameQuery } from "../redux/pokemon/pokemon";
import { BiArrowBack as BackArrow } from "react-icons/bi";
import colorChange from "../../public/helper_functions/color_changer";

const Pokemon = () => {
  const { name } = useParams();

  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <div>
      {error && <>Oh no, there was an error</>}
      {isLoading && <>Loading...</>}
      {data && (
        <div className="card">
          <section style={colorChange(data.types[0].type.name)}>
            <Link activeclassname="active link" to={`/`}>
              <BackArrow />
            </Link>
            <div className="flex flex-col items-center">
              <h3>{data.species.name.toUpperCase()}</h3>
              <img
                className="w-[250px]"
                src={data.sprites.other["official-artwork"]["front_default"]}
                alt={data.species.name}
              />
            </div>
          </section>
          <section className="rounded-t-lg p-3">
            <p>Placeholder for the pokemon description</p>

            <div>
              <h1>Data</h1>
              <ul>
                <li key="0">
                  <span>Abilities: </span>
                  {data.abilities.map((ability, index) => (
                    <>
                      <span key={index}>{ability.ability.name} </span>
                    </>
                  ))}
                </li>
                <li key="1">
                  <span>Height: </span>
                  <span>{data.height}</span>
                </li>
                <li key="2">
                  <span>Weight: </span>
                  <span>{data.weight}</span>
                </li>
                <li key="3">
                  <span>Types: </span>
                  {data.types.map((aType, index) => (
                    <>
                      <span key={index} style={colorChange(aType.type.name)} className="rounded-full pr-2 pl-2">{aType.type.name} </span>
                    </>
                  ))}
                </li>
              </ul>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
