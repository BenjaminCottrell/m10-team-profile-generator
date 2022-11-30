const Employee = require ("./Employee");

// we need to extend the Employee class with the new Manager, who also has an office number
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        // defining the office number here
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    // run a function to return the office number of the Manager
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;