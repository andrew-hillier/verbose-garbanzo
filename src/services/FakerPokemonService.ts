import { faker } from '@faker-js/faker';
import { PokemonStub } from "../models/PokemonStub";
import { Pokemon } from "../models/Pokemon";
import { IPokemonService } from './IPokemonService';


export class FakerPokemonService implements IPokemonService {
    getPokemonCollection(limit: number): Promise<void | PokemonStub[]> {
        const collection: PokemonStub[] = []

        for (let i = 0; i < limit; i++) {
            collection.push(
                new PokemonStub(
                    faker.animal.cat(),
                    faker.lorem.paragraph()),
            )
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(collection);
            }, 1500);
        });
    }

    getPokemon(id: number): Promise<void | Pokemon> {
        const pokemon = new Pokemon(
            id,
            faker.animal.cat(),
            faker.word.noun(),
            faker.word.noun())

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(pokemon);
            }, 1500);
        });
    }

}
