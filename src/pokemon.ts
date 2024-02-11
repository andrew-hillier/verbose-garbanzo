export class Pokemon {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
};

export function getPokemon(): Promise<Pokemon> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Pokemon('Bulbasaur'))
        }, 1500);
    });
};