import '../css/style.css';

const pokeURL = 'https://pokeapi.co/api/v2/pokemon/?limit=5';

async function fetchPokemons() {
  const response = await fetch(pokeURL, {
    headers: { accept: 'application/json' },
  });
  const pokemons = await response.json();
  console.log(pokemons);
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to Poke App</h1>
      <button onClick={fetchPokemons} className="btn btn-get-pokemons">
        Show me Pokemons
      </button>
    </div>
  );
}

export default App;
