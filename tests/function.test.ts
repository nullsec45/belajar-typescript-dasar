import { sayHello } from "../src/say-hello";

describe("test function", function () {
    it("should support function in typescript", function () {
        expect(sayHello("Denisa")).toBe("Hello Denisa");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Gita");
    });

    it("should default value value", function () {
        function goodMorning(name: string = "Guest"): string {
            return `Good Morning ${name}`;
        }
        expect(goodMorning()).toBe("Good Morning Guest");
        expect(goodMorning("Fajar")).toBe("Good Morning Fajar");
    });

    it("should support rest parameter", function () {
        function sum(...values: number[]): number {
            return values.reduce((acc, cur) => acc + cur);
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    })

    it("should support optional parameter", function () {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            } else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Rama")).toBe("Hello Rama");
        expect(sayHello("Rama Fajar")).toBe("Hello Rama Fajar");
    })

    it("should support function overloading", function () {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if (typeof value == "string") {
                return value.toUpperCase();
            } else {
                return value * 10;
            }

        }
        expect(callMe(10)).toBe(100);
        expect(callMe("Fajar")).toBe("FAJAR");
    })
})