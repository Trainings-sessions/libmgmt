export class Book {
    ISDN: number;
    name: string;
    price: number;
    author: string;
    description: string;
    icon: string

    constructor(ISDN: number, name: string, price: number, author: string, descrption: string,icon:string) {
        this.ISDN = ISDN;
        this.name = name;
        this.price = price;
        this.author = author;
        this.description = descrption;
        this.icon = icon;
    }
}
