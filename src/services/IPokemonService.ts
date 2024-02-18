import { Page } from "../models/Page";
import { PokemonStub } from "../models/PokemonStub";
import { Pokemon } from "../models/Pokemon";


export interface IPokemonService {
    getPokemonCollection(offset: number, limit: number): Promise<void | Page<PokemonStub>>;
    getPokemon(id: number): Promise<void | Pokemon>;
}
