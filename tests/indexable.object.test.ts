describe("indexable object", function () {
    it("should indexable object interface", function () {
        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            name: "Fajar",
            address: "Jakarta"
        }

        console.info(dictionary["name"]);
        console.info(dictionary["address"]);
    })
});