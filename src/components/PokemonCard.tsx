import { useEffect, useState } from "react";
import { PokemonStub } from "../models/PokemonStub";
import { Pokemon } from "../models/Pokemon";
import { PokemonServiceProvider } from '../services/PokemonServiceProvider';
import Loader from "./Loader";
import TypeLabel from "./TypeLabel";

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
    <div className="card">
      <div className="card-body">
        {pokemon === undefined ? (
          <Loader />
        ) : (
          <div>
            <h5 className="card-title">#{pokemon?.id} {pokemon?.name}</h5>
            {/* todo: don't hardcode */}
            <TypeLabel type="ghost" />
            <TypeLabel type="fire" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonCard;
