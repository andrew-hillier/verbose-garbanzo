import { useEffect, useState } from "react";
import { PokemonStub } from "../models/PokemonStub";
import { PokemonServiceProvider } from '../services/PokemonServiceProvider';
import PokemonCard from "../components/PokemonCard";

function PokemonList() {
    const [pokemonCollection, setPokemonCollection] = useState<void | PokemonStub[]>();

    useEffect(() => {
        const pokemonService = new PokemonServiceProvider().getService();

        pokemonService.getPokemonCollection(10) // todo: customise
            .then(data => {
                setPokemonCollection(data);
            });
    }, []);

    return (
        <div>
            <h2>Pokemon</h2>

            {pokemonCollection === undefined ? (
                <div>loading...</div>
            ) : (
                <div>
                    {pokemonCollection?.map(pokemon =>
                        <PokemonCard key={pokemon.name} pokemonStub={pokemon} />
                    )}
                </div>
            )}
        </div>
    )
}

export default PokemonList