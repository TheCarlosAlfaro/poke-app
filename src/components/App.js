import { useState } from 'react';
import '../css/style.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const pokeURL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';

  async function fetchPokemons() {
    setIsLoading(true);
    const response = await fetch(pokeURL, {
      headers: { accept: 'application/json' },
    });
    const data = await response.json();
    const pokemons = data.results;
    setPokemons(pokemons);
    setIsLoading(false);
    console.log(pokemons);
  }

  return (
    <div className="App">
      <h1>Welcome to Poke App</h1>
      <button onClick={fetchPokemons} className="btn btn-get-pokemons">
        Show me Pokemons
      </button>
      {isLoading && (
        <div className="lds-ripple loader">
          <div></div>
          <div></div>
        </div>
      )}
      {pokemons.length > 0 &&
        pokemons.map((poke) => <div key={poke.name}>{poke.name}</div>)}
    </div>
  );
}

export default App;
