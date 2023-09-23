describe("indexable array", function () {
    it("should support indexable interface", function () {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Rama", "Fajar", "Fadhillah"];
        console.info(names);
    })
})