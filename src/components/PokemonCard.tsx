import { useEffect, useState } from "react";
import { PokemonStub } from "../models/PokemonStub";
import { Pokemon } from "../models/Pokemon";
import { PokemonServiceProvider } from '../services/PokemonServiceProvider';
import Loader from "./Loader";

function PokemonCard({ pokemonStub }: { pokemonStub: PokemonStub }) {
  const [pokemon, setPokemon] = useState<void | Pokemon>();

  useEffect(() => {
    const pokemonService = new PokemonServiceProvider().getService(); // todo static?

    pokemonService.getPokemon(0) // todo: get id from stub
      .then(data => {
        setPokemon(data);
      })
  }, [pokemonStub]);

  return (
    <div className="card">
      <div className="card-body">
        {pokemon === undefined ? (
          <Loader />
        ) : (
          <div>
            <h5 className="card-title">{pokemon?.name}</h5>
            <p className="card-text">
              {pokemon?.type1}
              <br />
              {pokemon?.type2}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonCard;
