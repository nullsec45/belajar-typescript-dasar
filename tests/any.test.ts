describe("Any", function () {
    // Any adalah tipe data bebas pada type script, artinya kita bebas pakai ty[e data apa saja
    it("Should support any in typescript", function () {
        const person: any = {
            id: 1,
            name: "Rama Fajar Fadhillah",
            age: 20
        }

        person.age = 21
        person.address = "Indonesia";

        console.info(person);
    })
});