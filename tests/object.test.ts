describe("Object Type", function () {
    it("should support in typescript", function () {
        const person: { id: string | number, name: string } = {
            id: "1",
            name: "Fajar"
        }
        console.info(person);

        person.id = 2;
        person.name = "Fadhillah";
        console.info(person);
    })
})