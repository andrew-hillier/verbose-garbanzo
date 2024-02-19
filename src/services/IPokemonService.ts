import { Page } from "../models/Page";
import { PokemonStub } from "../models/PokemonStub";
import { Pokemon } from "../models/Pokemon";


export interface IPokemonService {
    getPokemonCollection(pageNumber: number, pageSize: number): Promise<void | Page<PokemonStub>>;
    getPokemon(id: number): Promise<void | Pokemon>;
}
