// bring in employee
const Employee = require("../lib/Employee");

describe("Employee", () => {

// test for instantiating an Employee instance
    it("can instantiate Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");  
    });


// Tests for Setters
    it("can set name via constructor arguments", () => {
        const employeeName = "Bob"  
  
        const newEmployee = new Employee(employeeName);
        expect(newEmployee.employeeName).toBe(employeeName);
    });

    it("can set id via constructor argument", () => {
        const testValue = 100;  
    
        const newEmployee = new Employee("Foo", testValue);
        expect(newEmployee.id).toBe(testValue);
    });


    it("can set email via constructor argument", () => {
        const testValue = "test@testing.com";  
    
        const newEmployee = new Employee("Foo", 1, testValue);
        expect(newEmployee.email).toBe(testValue);
    });
  
// Tests for Getters    
    describe("getName", () => {
        it("can get name of employee via getName", () => {
            const testValue = "Virginia";

            const newEmployee = new Employee(testValue);
            expect(newEmployee.getName)
        })
    });
    
});