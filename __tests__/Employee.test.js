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
        expect(newEmployee.employeeName).toBe(employeeName);
    });

    it("can set id via constructor argument", () => {
        const testValue = 100;  
    
        const newEmployee = new Employee("Guy", testValue);
        expect(newEmployee.id).toBe(testValue);
    });


    it("can set email via constructor argument", () => {
        const testValue = "test@testing.com";  
    
        const newEmployee = new Employee("Guy", 1, testValue);
        expect(newEmployee.email).toBe(testValue);
    });
  
// Getter test   
    describe("getName", () => {
        it("can get name of employee via getName", () => {
            const testValue = "Celine";

            const newEmployee = new Employee(testValue);
            expect(newEmployee.getName)
        })
    });
    
});