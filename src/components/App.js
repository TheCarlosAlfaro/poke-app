import { useState } from 'react';
import '../css/style.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const pokeURL = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

  async function createPokemonObj(list) {
    list.forEach(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const pokemonObj = await response.json();
      setPokemons((prevList) => [...prevList, pokemonObj]);
      console.log(pokemonObj);
    });
  }

  async function fetchPokemons() {
    setIsLoading(true);
    const response = await fetch(pokeURL, {
      headers: { accept: 'application/json' },
    });
    const data = await response.json();
    const pokemonsList = data.results;

    createPokemonObj(pokemonsList);

    setIsLoading(false);
  }

  return (
    <div className="app-container">
      <h1>Welcome to Poke App</h1>
      {!pokemons.length > 0 && (
        <button onClick={fetchPokemons} className="btn btn-get-pokemons">
          Load Pokemons
        </button>
      )}
      {isLoading && (
        <div className="lds-ripple loader">
          <div></div>
          <div></div>
        </div>
      )}
      <div className="pokemon-list-container">
        {pokemons.length > 0 &&
          pokemons.map((poke) => (
            <div key={poke.name} className="pokemon-card">
              <p>{poke.name}</p>
              <img src={poke.sprites.front_default} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
