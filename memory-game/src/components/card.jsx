/* eslint-disable react/prop-types */
export default function PokeCard({aPokemon, HandleCardClick}){
    return(
        <div onClick={() => HandleCardClick(aPokemon.name)}>
            {aPokemon.sprite != '' &&
                 <img src={aPokemon.sprite} alt={aPokemon.name} />
            }
            <h2>{aPokemon.name}</h2>
        </div>
    );
}