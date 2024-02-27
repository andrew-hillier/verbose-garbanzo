import { PokemonStub } from "../models/PokemonStub";
import { Pokemon } from "../models/Pokemon";
import { IPokemonService } from './IPokemonService';
import { Page } from '../models/Page';


export class DefaultPokemonService implements IPokemonService {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getPokemonCollection(pageNumber: number, pageSize: number): Promise<void | Page<PokemonStub>> {
        const offset = (pageNumber - 1) * pageSize;
        const limit = pageSize;

        let url = `${this.baseUrl}/pokemon-species?offset=${offset}&limit=${limit}` //-species

        return await fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const collection: PokemonStub[] = [];
                data.results.forEach((result: { name: string; url: string; }) => {
                    collection.push(new PokemonStub(result.name, result.url));
                });

                const page = new Page<PokemonStub>(data.count, offset, limit, collection);

                return page;
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    async getPokemon(id: number): Promise<void | Pokemon> {
        let url = `${this.baseUrl}/pokemon/${id}` //-species

        return await fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                const pokemon = new Pokemon(
                    data.id,
                    data.name,
                    data.types[0].type.name,
                    // data.types[1]?.type.name,
                    data.sprites.front_default
                );

                return pokemon;
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
}
