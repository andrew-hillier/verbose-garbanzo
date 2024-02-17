import { faker } from '@faker-js/faker';
import { PokemonStub } from "../models/PokemonStub";
import { Pokemon } from "../models/Pokemon";
import { IPokemonService } from './IPokemonService';


export class FakerPokemonService implements IPokemonService {
    getPokemonCollection(limit: number): Promise<void | PokemonStub[]> {
        let collection: PokemonStub[] = []

        for (let i = 0; i < limit; i++) {
            collection.push(
                new PokemonStub(
                    faker.animal.cat(),
                    faker.lorem.paragraph()),
            )
        }

        return new Promise((resolve) => {
            resolve(collection);
        });
    }

    getPokemon(id: number): Promise<void | Pokemon> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(new Pokemon(
                    id,
                    faker.animal.cat(),
                    faker.word.noun(),
                    faker.word.noun()));
            }, 1500);
        });
    }

}
