const Employee = require('./Employee');

// we need to extend the Employee class with the new Engineer, who also has a github
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        // additional info not included by Employee class, the Engineer's github, is obtained here
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    // run a function to return the github of the Engineer
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;