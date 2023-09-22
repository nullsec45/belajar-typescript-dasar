import { Customer, CustomerType } from "../src/enum";

describe("enum", function () {
    it("should support in typescript", function () {
        const customer: Customer = {
            id: 1,
            name: "Fajar",
            type: CustomerType.GOLD
        }
        console.info(customer);
    });
});