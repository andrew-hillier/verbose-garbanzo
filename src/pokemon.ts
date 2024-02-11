import { faker } from '@faker-js/faker'

export class Pokemon {
    name: string;
    description: string

    constructor(
        name: string,
        description: string) {
        this.name = name;
        this.description = description;
    }
};

export class PokemonService {
    getPokemonCollection(): Promise<Pokemon[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    new Pokemon(
                        faker.animal.cat(),
                        faker.lorem.paragraph()),
                    new Pokemon(
                        faker.animal.cat(),
                        faker.lorem.paragraph()),
                    new Pokemon(
                        faker.animal.cat(),
                        faker.lorem.paragraph()),
                    new Pokemon(
                        faker.animal.cat(),
                        faker.lorem.paragraph())
                ])
            }, 1500);
        });
    };

    getPokemon(): Promise<Pokemon> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(new Pokemon(
                    faker.animal.cat(),
                    faker.lorem.paragraph()))
            }, 1500);
        });
    };
};