import { faker } from '@faker-js/faker';
import { PokemonStub } from "../models/PokemonStub";
import { Pokemon } from "../models/Pokemon";
import { IPokemonService } from './IPokemonService';


export class DefaultPokemonService implements IPokemonService {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getPokemonCollection(limit: number): Promise<void | PokemonStub[]> {
        let url = `${this.baseUrl}/api/v2/pokemon`
        if (limit) {
            url += `?limit=${limit}`
        }

        return fetch(url)
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

                return collection as PokemonStub[];
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    getPokemon(id: number): Promise<void | Pokemon> {
        return new Promise((resolve) => {
            resolve(new Pokemon(
                id,
                faker.animal.cat(),
                faker.word.noun(),
                faker.word.noun()));
        });
    }
}
