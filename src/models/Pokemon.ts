export class Pokemon {
    id: number
    name: string;
    type1: string;
    type2: string;

    constructor(
        id: number,
        name: string,
        type1: string,
        type2: string) {
        this.id = id;
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
    }
}
