import { useState, useEffect } from 'react'
import {Pokedex} from 'pokeapi-js-wrapper'
import PokeCard from './components/card'
import pokemonData from './pokemonData'
import './styles/stylesheet.css'

function App() {
  const [pokemon, setPokemon] = useState(pokemonData)
  const [pokemonPicked, setPokemonPicked] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const [highscore, setHighscore] = useState(0)

  useEffect(() => {
    const P = new Pokedex()
    console.log("useeffect ran\n")

    pokemon.forEach((aPokemon) => {
      P.getPokemonByName(aPokemon.name).then((response) => {
        console.log(response)
        let updatedPokemon = {...aPokemon}
        updatedPokemon.sprite = response.sprites.front_default
        
        setPokemon(pokemon => {
          return pokemon.map((aPoke) => {
            if(aPoke.name == updatedPokemon.name)
              return updatedPokemon
            else 
              return aPoke
          })
        })
      })
    })
  }, [])

  function HandleCardClick(pokeClickedName){
    if(pokemonPicked.find((pokeName) => pokeClickedName == pokeName) === undefined){ //game continues
      //add to picked
      let newPokemonPicked = [...pokemonPicked]
      newPokemonPicked.push(pokeClickedName)
      setPokemonPicked(newPokemonPicked)
      
      setCurrentScore(currentScore + 1)
    } else{ //duplicate chosen gameover
      if(currentScore > highscore)
        setHighscore(currentScore)
      setCurrentScore(0)

      setPokemonPicked([])
    }
    ShufflePokemon() //shuffle no matter what
  }

  function ShufflePokemon(){
    let newPokemon = []
    let indicesPicked = []
    while(indicesPicked.length < pokemon.length){
      const randIndex = Math.floor(Math.random() * pokemon.length)
      if(indicesPicked.find((index) => randIndex == index) === undefined){
        indicesPicked.push(randIndex)
        newPokemon.push(pokemon[randIndex])
      }
    }
    setPokemon(newPokemon)
  }

  return (
    <div className='app'>
      <div className='topBar'>
        <div className='titleSection'>
          <h1>Pokemon Memory Game</h1>
          <p>Do not select a pokemon more than once.</p>
        </div>
        <div className='scoreSection'>
          <h2>Current score: {currentScore}</h2>
          <h2>High score: {highscore}</h2>
        </div>
      </div>
      <div className='cardsContainer'>
        {pokemon.map((aPokemon) => {
          return <PokeCard key={aPokemon.name} aPokemon={aPokemon} HandleCardClick={HandleCardClick}/>
        })}
      </div>
    </div>
  );
}

export default App
