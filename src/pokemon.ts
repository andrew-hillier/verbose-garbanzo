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
    getPokemonCollection(): Promise<void | Pokemon[]> {
        console.log(process.env.REACT_APP_USE_API);
        return process.env.REACT_APP_USE_API
            ? this.getFromApi()
            : this.getFromFaker();
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

    private getFromApi(): Promise<void | Pokemon[]> {
        return fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                let collection: Pokemon[] = [];
                data.results.forEach((result: { name: string; url: string; }) => {
                    collection.push(new Pokemon(result.name, result.url));
                });

                return collection as Pokemon[];
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    private getFromFaker(): Promise<void | Pokemon[]> {
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
    }
};