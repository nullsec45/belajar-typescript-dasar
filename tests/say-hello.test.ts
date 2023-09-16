import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
    it("should return hello Fajar", function (): void {
        expect(sayHello("Fajar")).toBe("Hello Fajar");
    });
});

