export type ID = string | number;


export type Category = {
    id: ID,
    name: String
}

export type Product = {
    id: ID,
    name: string,
    price: number,
    category: Category
}