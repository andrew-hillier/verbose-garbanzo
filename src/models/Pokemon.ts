export class Pokemon {
    id: number
    name: string;
    type1: string;
    // type2: string | void;
    imageUrl: string;

    constructor(
        id: number,
        name: string,
        type1: string,
        // type2: string | void,
        imageUrl: string
    ) {
        this.id = id;
        this.name = name;
        this.type1 = type1;
        // this.type2 = type2;
        this.imageUrl = imageUrl;
    }
}
