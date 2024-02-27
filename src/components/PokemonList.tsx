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

    const pageNumberParameter = new URLSearchParams(search).get('pageNumber');
    const pageSizeParameter = new URLSearchParams(search).get('pageSize');

    // todo: there must be a better way to natively provide default value,
    //       otherwise extract this to a function...
    const pageNumber = isNaN(parseInt(pageNumberParameter as string))
        ? 1
        : parseInt(pageNumberParameter as string);
    const pageSize = isNaN(parseInt(pageSizeParameter as string))
        ? 5
        : parseInt(pageSizeParameter as string);

    const [pokemonPage, setPokemonPage] = useState<void | Page<PokemonStub>>();

    useEffect(() => {
        const pokemonService = new PokemonServiceProvider().getService();

        pokemonService.getPokemonCollection(pageNumber, pageSize)
            .then(data => {
                setPokemonPage(data);
            });
    }, [pageNumber, pageSize]);

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
                                <PokemonCard key={pokemon?.id} id={pokemon?.id} />
                            )}
                            <PaginationNav pageNumber={pageNumber} pageSize={pageSize} totalResults={pokemonPage.total} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default PokemonList
