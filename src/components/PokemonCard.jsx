import React from 'react';

const PokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  
  const PokemonCard = () => {
    
    const pokemon = PokemonList[0];
  
    return (
      <figure>
        <figcaption>{pokemon.name}</figcaption>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
      </figure>
    );
  };


export default PokemonCard;
