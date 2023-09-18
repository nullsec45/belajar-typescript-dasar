import { Category, Product } from "../src/optional-type";

describe("Type-Alias", function () {
    it("Should support in typescript", function () {
        const category: Category = {
            id: 1,
            name: "Handphone",
            description: "Kategori Handphone"  //objek optional, artinya bisa ditambah description atau tidak
        }

        const product: Product = {
            id: "1",
            name: "Samsung S20",
            price: 20000000,
            category: category
        }

        // product.description = "Produk1";
        console.info(category);
        console.info(product);


    })
})