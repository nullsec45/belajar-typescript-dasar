describe("Union Type", function () {
    it("should support in typescript", function () {
        // tipe data union adalah tipe data yang berisi tipe data yang dideklarasikan;
        let sample: number | string | boolean = "Fajar";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);

        // akan error karena tipe data array tidak didefinisikan pada variable sample;
        // sample = ["1"];
    });

    it("should support typeof operator", function () {
        function proccess(value: number | string | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 2;
            } else {
                return !value
            }
        }
        expect(proccess("fajar")).toBe("FAJAR");
        expect(proccess(100)).toBe(102);
        expect(proccess(true)).toBe(false);

    });
});