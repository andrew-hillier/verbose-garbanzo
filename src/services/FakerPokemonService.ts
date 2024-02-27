import { faker } from '@faker-js/faker';
import { PokemonStub } from "../models/PokemonStub";
import { Page } from "../models/Page";
import { Pokemon } from "../models/Pokemon";
import { IPokemonService } from './IPokemonService';

export class FakerPokemonService implements IPokemonService {
    getPokemonCollection(pageNumber: number, pageSize: number): Promise<void | Page<PokemonStub>> {
        const offset = pageNumber * pageSize;
        const limit = pageSize;

        const collection: PokemonStub[] = []

        for (let i = 0; i < limit; i++) {
            const url = `invalid-web-address/${faker.number.int({ min: 1, max: 1500 })}/`
            collection.push(
                new PokemonStub(
                    faker.animal.cat(),
                    url),
            )
        }

        const page = new Page(
            205,
            offset,
            limit,
            collection
        )

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(page);
            }, faker.number.int({ min: 200, max: 2000 }));
        });
    }

    getPokemon(id: number): Promise<void | Pokemon> {
        const pokemon = new Pokemon(
            id,
            faker.animal.cat(),
            faker.word.noun(),
            // faker.word.noun(),
            "")

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(pokemon);
            }, faker.number.int({ min: 200, max: 2000 }));
        });
    }
}
