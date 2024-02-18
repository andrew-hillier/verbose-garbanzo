import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";

function App() {
  return (
    <div>
      <Navbar />
      <div id="content" className="container">
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
