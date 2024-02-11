import { useEffect, useState } from "react";
import { Pokemon, PokemonService } from "../pokemon";
import PokemonCard from "../components/PokemonCard";

function App() {
  const nodeEnv = process.env.NODE_ENV || "(null)";
  const testVariable = process.env.REACT_APP_TEST_VARIABLE || "(null)";

  const [pokemonCollection, setPokemonCollection] = useState<Pokemon[]>();

  useEffect(() => {
    const pokemonService = new PokemonService();

    pokemonService.getPokemonCollection()
      .then(data => {
        setPokemonCollection(data);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/app">MyApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <a className="nav-link" href="/app">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="content" className="container">
        <h2>Pokemon</h2>

        {pokemonCollection === undefined ? (
          <div>loading...</div>
        ) : (
          <div>


            {pokemonCollection?.map(pokemon =>
              <PokemonCard pokemon={pokemon} />
            )}

            <hr />

            nodeEnv: {nodeEnv}
            <br />
            testVariable: {testVariable}
            <br />

            <hr />

            <div className="mb-3">
              <label htmlFor="emailAddressInput" className="form-label">name</label>
              <input className="form-control" id="emailAddressInput" placeholder="John Doe" />
            </div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
            </button>

            {/* tabindex="-1" */}
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
