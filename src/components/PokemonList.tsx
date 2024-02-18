import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { PokemonStub } from "../models/PokemonStub";
import { PokemonServiceProvider } from '../services/PokemonServiceProvider';
import PokemonCard from "../components/PokemonCard";
import { Page } from "../models/Page";
import PaginationNav from "./PaginationNav";
import Loader from "./Loader";

function PokemonList() {
    const search = useLocation().search;

    const offsetQueryParameter = new URLSearchParams(search).get('offset');
    const limitQueryParameter = new URLSearchParams(search).get('limit');

    // todo: there must be a better way to natively provide default value,
    //       otherwise extract this to a function...
    const offset = isNaN(parseInt(offsetQueryParameter as string))
        ? 0
        : parseInt(offsetQueryParameter as string);
    const limit = isNaN(parseInt(limitQueryParameter as string))
        ? 5
        : parseInt(limitQueryParameter as string);

    const [pokemonPage, setPokemonPage] = useState<void | Page<PokemonStub>>();

    useEffect(() => {
        const pokemonService = new PokemonServiceProvider().getService();

        pokemonService.getPokemonCollection(offset, limit)
            .then(data => {
                setPokemonPage(data);
            });
    }, [limit, offset]);

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
                            {/* <PaginationNav offset={offset} limit={limit} total={21} /> */}
                            <PaginationNav offset={offset} limit={limit} total={pokemonPage.total} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default PokemonList
