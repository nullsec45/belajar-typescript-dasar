import { Seller } from "../src/seller"
import { Employee, Manager } from "../src/employee";

describe("interface", function () {
    it("should support in typescript", function () {
        const seller: Seller = {
            id: 1,
            name: "Fajar"
        }

        console.info(seller)
    });

    it("should support extends interface", function () {
        const employee: Employee = {
            id: "1",
            name: "Fajar",
            division: "IT"
        }

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Fadhillah",
            division: "IT",
            numberOfEmployees: 10
        }

        console.info(manager);
    });

    it("should support function in interface", function () {
        interface Person {
            name: string,
            sayHello(name: string): string;
        }

        const person: Person = {
            name: "Fajar",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Gita"));
    })
})