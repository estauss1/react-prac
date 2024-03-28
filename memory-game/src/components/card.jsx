/* eslint-disable react/prop-types */
export default function PokeCard({aPokemon, HandleCardClick}){
    return(
        <div className={'card ' + aPokemon.type} onClick={() => HandleCardClick(aPokemon.name)}>
            {aPokemon.sprite != '' &&
                 <img className='cardImg' src={aPokemon.sprite} alt={aPokemon.name} />
            }
            <h2 className="cardTitle">{aPokemon.name}</h2>
        </div>
    );
}