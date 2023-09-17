describe("Array", function () {
    it("Should same with javascript", function () {
        const names: string[] = ["Rama", "Fajar", "Fadhillah"];
        const values: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        console.info(names);
        console.info(values);
    });

    it("Should support readonly array", function () {
        const hobbies: ReadonlyArray<string> = ["Membaca", "Ngoding"];
        console.info(hobbies);

        // akan error karena, variablenya readonly
        // hobbies[0] = "Main Game";
    });

    it("should support readonly tupple array", function () {
        //  di bawah adalah tipe data t 
        const person: readonly [string, string, number] = ["Fajar", "Khannedy", 10];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    });
})