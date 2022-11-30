const Manager = require("../lib/Manager");

describe("Manager", () => {

    // tests for Manager need to have their office number
    it("Can set office via constructor arguments", () => {
        const office = 4;
        const newManager = new Manager('Guy', 1, 'test@email.com', office);
        expect(newManager.office).toBe(office);
    });

    it("Can set name via constructor arguments.", () => {
        const name = "Ben Cottrell";
        const newManager = new Manager(name);
        expect(newManager.name).toBe(name);
    });

    // // Intern needs to have name, id, email and office
    describe("getOffice", () => {
        it("Can get office number via getOffice()", () => {
            const office = 4;
            const newManager = new Manager('Guy', 1, 'test@email.com', office);
            expect(newManager.getOffice()).toBe(office);
        });
    });

    // the role returned should be Manager
    describe("getRole", () => {
        it("getRole() should return \"Manager\"", () => {
            const role = "Manager";
            const newManager = new Manager();
            expect(newManager.getRole()).toBe(role);
        });
    });

});