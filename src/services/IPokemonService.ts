import { PokemonStub } from "../models/PokemonStub";
import { Pokemon } from "../models/Pokemon";


export interface IPokemonService {
    getPokemonCollection(limit: number): Promise<void | PokemonStub[]>;
    getPokemon(id: number): Promise<void | Pokemon>;
}
