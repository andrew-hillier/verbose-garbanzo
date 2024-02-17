import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";
import ConfigurationTest from "../components/ConfigurationTest";
import TestModal from "../components/TestModal";

function App() {

  return (
    <div>
      <Navbar />

      <div id="content" className="container">
        <PokemonList />

        <hr />

        <ConfigurationTest />

        <hr />

        <TestModal />
      </div>
    </div>
  );
}

export default App;
