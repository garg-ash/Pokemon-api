import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './pokemon.css'


function Pokemon() {
    const [pokeData, setPokeData] = useState([])
    const [firstData, setFirstData] = useState([])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then((response)=>{
            console.log(response)
            setPokeData(data.response.results)
            console.log(setPokeData)
        })
    }, [])

    useEffect(()=>{
        pokeData?.map((dt)=>{
            axios.get(dt.url).then((response)=>{
            console.log(response.data, "92")
            setFirstData((prev)=>[...prev, response.data])
            })
        })

    }, [pokeData])
  return (
    <>
    <div className="main">
      {firstData.map((item, index)=>{
        return(
            <div className="pokemon" key={index}>
                <p>{item.name}</p>
                <img src="{item.sprites.other.dream_world.front_default}" alt=""/>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default Pokemon
