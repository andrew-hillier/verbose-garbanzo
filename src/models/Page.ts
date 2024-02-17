export class Page<T> {
    total: number;
    offset: number;
    limit: number;
    items: T[];

    constructor(
        total: number,
        offset: number,
        limit: number,
        items: T[]) {
        this.total = total;
        this.offset = offset;
        this.limit = limit;
        this.items = items;
    }
}
