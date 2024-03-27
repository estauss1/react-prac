import { useState, useEffect } from 'react'
import {Pokedex} from 'pokeapi-js-wrapper'


function App() {
  useEffect(() => {
    const P = new Pokedex.Pokedex()
    P.getPokemonByName("golduck").then((response) =>{
      console.log(response)
    })
  }, [])

  return (
    <div></div>
  );
}

export default App
