describe("Optional Parameter", function () {
    it("should support null and undefined", function () {
        function sayHello(name?: string) {
            if (name) {
                console.info(`Hello ${name}`)
            } else {
                console.info(`Hello`);
            }
        }
        sayHello("Fajar");
        const name: string | undefined = undefined;
        sayHello(name);
        // sayHello(null);
    })

})