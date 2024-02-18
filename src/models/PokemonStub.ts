export class PokemonStub {
    id: number;
    name: string;
    url: string;

    constructor(
        name: string,
        url: string) {
        this.name = name;
        this.url = url;

        const urlSplit = url.split('/');
        this.id = parseInt(urlSplit[urlSplit.length - 2]);
    }
}
