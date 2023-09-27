import { Seller } from "../src/seller"
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";

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

        const person: Person = {
            name: "Fajar",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Gita"));
    })

    it("should support intersection types", function () {
        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }

        type Domain = HasId & HasName;

        const domain: Domain = {
            id: "1",
            name: "Fajar"
        }

        console.info(domain);
    });

    it("should support type assertions", function () {
        const person: any = {
            name: "Fajar",
            age: 20
        }

        const person2: Person = person as Person;
        // akan error karena function sayHello tidak ada di object person
        // person.sayHello("Gita");
        console.info(person2);
    })
})