describe("if statement", function () {
    it("should support if in typescript", function () {
        const examValue = 90;

        if (examValue > 80) {
            console.info("Good");
        } else if (examValue >= 60) {
            console.info("Not Bad");
        } else {
            console.info("Try Again");
        }
    });

    it("should support ternary operator", function () {
        const value = 80;
        const say = value >= 75 ? "Congrats" : "Try Again";
        console.info(say);
    });


    it("should support switch statement", function () {
        function sayHello(name: string): string {
            switch (name) {
                case "Rama":
                    return `Hi Rama`;
                case "Fajar":
                    return `Hi Fajar`;
                    break;
                case "Fadhillah":
                    return `Hi Fadhillah`;
                    break;
                default:
                    return `Hi`;
            }
        }
        expect(sayHello("Rama")).toBe("Hi Rama");
        expect(sayHello("Fajar")).toBe("Hi Fajar");
        expect(sayHello("Fadhillah")).toBe("Hi Fadhillah");
    })

});