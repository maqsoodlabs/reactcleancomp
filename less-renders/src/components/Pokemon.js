import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Pokemon = () => {
  const BASEURL = "https://pokeapi.co/api/v2/pokemon/25/";
  const [pokemon, setPokemon] = useState({ id: "", name: "", weight: "" });

  useEffect(() => {
    const callPikchu = async () => {
      return axios({
        method: "GET",
        url: BASEURL,
      })
        .then((res) => {
          console.log("response is : ", res.data);
          setPokemon({
            id: res.data.id,
            name: res.data.name,
            weight: res.data.weight,
          });
        })
        .catch((err) => {
          console.log("error occured ", err);
        });
    };

    callPikchu();
  }, []);

  return (
    <div>
      <Card style={{ textAlign: "center" }} bg="warning">
        ID : {pokemon.id}, Name : {pokemon.name}, Weight : {pokemon.weight}
      </Card>
    </div>
  );
};

export default Pokemon;
