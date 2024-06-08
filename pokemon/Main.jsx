import axios from "axios";
import React, { useEffect, useState } from "react";
import "./pokemon.css"

function Main() {
  const [pokeData, setPokeData] = useState([]);
  const [firstData, setFirstData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((response) => {
        console.log(response);
        setPokeData(response.data.results);
        console.log(response.data.results, "hello");

        // if(pokeData.length>0){
        //   pokeData?.map((dt)=>{
        //     axios.get(`https://pokeapi.co/api/v2/pokemon/${dt.name}`)
        //     .then((response)=>{
        //       console.log(response.dt)
        //       setFirstData(pokeData)
        //     })
        //     console.log(setFirstData)
        //     // console.log(pokeData)
        //   })

        // }
      });
  }, []);

  useEffect(() => {
    pokeData?.map((dt) => {
      axios.get(dt.url).then((response) => {
        console.log(response.data, "92");
        //  setFirstData([...firstData, response.data])
        setFirstData((prev) => [...prev, response.data]);
      });
      // console.log(setFirstData)
      // console.log(pokeData)
    });
  }, [pokeData]);
  console.log(pokeData);
  console.log(firstData);

  return (
    <div className="main">
      {firstData.map((item, index) => {
        return (
          
            <div className="pokemon" key={index}>
              <p>{item.name}</p>
              <img src={item.sprites.other.dream_world.front_default} alt="" />
            </div>
          
        );
      })}
    </div>
  );
}

export default Main;
