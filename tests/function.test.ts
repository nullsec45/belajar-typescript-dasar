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
})