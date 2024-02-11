import { useEffect, useState } from "react";
import { Pokemon, getPokemon } from "../pokemon";

function App() {
  const nodeEnv = process.env.NODE_ENV || "(null)";
  const testVariable = process.env.REACT_APP_TEST_VARIABLE || "(null)";

  const [pokemonInstance, setPokemonInstance] = useState<Pokemon>();

  useEffect(() => {
    getPokemon()
      .then(data => {
        setPokemonInstance(data);
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
        <h2>Page Title</h2>

        {pokemonInstance == undefined ? (
          <div>loading...</div>
        ) : (
          <div>
            nodeEnv: {nodeEnv}
            <br />
            testVariable: {testVariable}
            <br />
            pokemonInstance.name: {pokemonInstance?.name}

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
