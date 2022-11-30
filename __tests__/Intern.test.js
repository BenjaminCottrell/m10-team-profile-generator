const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Can set school via constructor arguments", () => {
        const school = "UCF";
        const newIntern = new Intern('Guy', 1, 'test@email.com', school);
        expect(newIntern.school).toBe(school);
    });

    it("Can set name via constructor arguments.", () => {
        const name = "Ben Cottrell";
        const newIntern = new Intern(name);
        expect(newIntern.name).toBe(name);
    });

    describe("getSchool", () => {
        it("Can get school via getSchool()", () => {
            const school = "UCF";
            const newIntern = new Intern('Guy', 1, 'test@email.com', school);
            expect(newIntern.getSchool()).toBe(school);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Intern\"", () => {
            const role = "Intern";
            const newIntern = new Intern();
            expect(newIntern.getRole()).toBe(role);
        });
    });

});