// bring in employee
const Employee = require("../lib/Employee");

describe("Employee", () => {

// test for instantiating an Employee instance
    it("can instantiate Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");  
    });


// Setter tests
    it("can set name via constructor arguments", () => {
        const employeeName = "Fred"  
  
        const newEmployee = new Employee(employeeName);
        expect(newEmployee.name).toBe(employeeName);
    });

    it("can set id via constructor argument", () => {
        const testValue = 100;  
    
        const newEmployee = new Employee("Guy", testValue);
        expect(newEmployee.id).toBe(testValue);
    });


    it("can set email via constructor argument", () => {
        const testValue = "test@email.com";  
    
        const newEmployee = new Employee("Guy", 1, testValue);
        expect(newEmployee.email).toBe(testValue);
    });
  
// Getter tests   
    describe("getName", () => {
        it("can get name of employee via getName", () => {
            const testValue = "Celine";

            const newEmployee = new Employee(testValue);
            expect(newEmployee.getName)
        })
    });

    describe("getId", () => {
        it("can get id via getId()", () => {
            const testValue = 100;
            const newEmployee = new Employee("Guy", testValue);
            expect(newEmployee.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("can get email via getEmail()", () => {
            const testValue = "test@email.com";
            const newEmployee = new Employee("Guy", 1, testValue);
            expect(newEmployee.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const newEmployee = new Employee("Fred", 1, "test@email.com");
            expect(newEmployee.getRole()).toBe(testValue);
        });
    });
    
});