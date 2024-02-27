import { useEffect, useState } from "react";
import { PokemonStub } from "../models/PokemonStub";
import { Pokemon } from "../models/Pokemon";
import { PokemonServiceProvider } from '../services/PokemonServiceProvider';
import Loader from "./Loader";
import TypeLabel from "./TypeLabel";
import { Link } from "react-router-dom";

function PokemonCard({ pokemonStub }: { pokemonStub: PokemonStub }) {
  const [pokemon, setPokemon] = useState<void | Pokemon>();

  useEffect(() => {
    const pokemonService = new PokemonServiceProvider().getService(); // todo static?

    pokemonService.getPokemon(pokemonStub.id)
      .then(data => {
        setPokemon(data);
      })
  }, [pokemonStub]);

  return (
    <div className="card mb-3">
      {pokemon === undefined ? (
        <Loader />
      ) : (
        <div className="row g-0">
          <div className="col-md-4">
            <img src="637_gh.png" className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">#{pokemon?.id} {pokemon?.name}</h5>
              <div>
                <TypeLabel type={pokemon?.type1} />
                {/* {pokemon?.type2 === undefined ? (
                  <TypeLabel type={pokemon?.type2} />
                ) : (<div></div>)} */}
              </div>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              {/* todo: don't hardcode */}

              <Link className="btn btn-primary" to={`/${pokemon?.id}`}>See details</Link>
            </div>
          </div>
        </div>
      )}
    </div >
  );
}

export default PokemonCard;
