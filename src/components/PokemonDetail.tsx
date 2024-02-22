import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { PokemonServiceProvider } from "../services/PokemonServiceProvider";
import { Pokemon } from "../models/Pokemon";

function PokemonDetail() {
    const { id } = useParams();

    const idAsNumber = isNaN(parseInt(id as string))
        ? 1
        : parseInt(id as string);

    const [pokemon, setPokemon] = useState<void | Pokemon>();

    useEffect(() => {
        const pokemonService = new PokemonServiceProvider().getService();

        pokemonService.getPokemon(idAsNumber)
            .then(data => {
                setPokemon(data);
            });
    }, [idAsNumber]);

    return (
        <div>
            <h2>#{pokemon?.id} {pokemon?.name}</h2>
        </div>
    )
}

export default PokemonDetail