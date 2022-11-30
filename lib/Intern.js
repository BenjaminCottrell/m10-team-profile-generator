const Employee = require("./Employee");

// we need to extend the Employee class with the new Intern, who also has a school they are associated with
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        // defining the school here
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    // run a function to return the school of the Intern
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;