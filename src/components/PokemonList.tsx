import { useEffect, useState } from "react";
import { PokemonStub } from "../models/PokemonStub";
import { PokemonServiceProvider } from '../services/PokemonServiceProvider';
import PokemonCard from "../components/PokemonCard";
import { Page } from "../models/Page";
import PaginationNav from "./PaginationNav";
import Loader from "./Loader";

function PokemonList() {
    const [pokemonPage, setPokemonPage] = useState<void | Page<PokemonStub>>();

    useEffect(() => {
        const pokemonService = new PokemonServiceProvider().getService();

        pokemonService.getPokemonCollection(0, 10) // todo: customise
            .then(data => {
                setPokemonPage(data);
            });
    }, []);

    return (
        <div>
            <h2>Pokemon</h2>

            {pokemonPage === undefined ? (
                <Loader />
            ) : (
                <div>
                    Total: {pokemonPage.total}
                    {pokemonPage.items.length === 0 ? (
                        <div>no results</div>
                    ) : (
                        <div>
                            {pokemonPage.items?.map(pokemon =>
                                <PokemonCard key={pokemon.name} pokemonStub={pokemon} />
                            )}
                        </div>
                    )}

                    <PaginationNav />
                </div>
            )}
        </div>
    )
}

export default PokemonList
