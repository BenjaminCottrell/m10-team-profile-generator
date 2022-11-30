const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    
    // tests for Engineer need to have the github username
    it("Can set GitHub account via constructor", () => {
        const githubUsername = "GitHubUser";
        const newEngineer = new Engineer("Guy", 1, "test@email.com", githubUsername);
        expect(newEngineer.github).toBe(githubUsername);
    });

    it("Can set name via constructor arguments.", () => {
        const name = "Ben Cottrell";
        const newEngineer = new Engineer(name);
        expect(newEngineer.name).toBe(name);
    });

    // Engineer needs to have name, id, email and github
    describe("getRole", () => {
    it("getRole() should return \"Engineer\"", () => {
        const testValue = "Engineer";
        const newEngineer = new Engineer("Guy", 1, "test@email.com", "GitHubUser");
        expect(newEngineer.getRole()).toBe(testValue);
        });
    });    

    //the github username should be able to be gotten with the getGithub function
    describe("getGitHub", () => {
        it("Can get GitHub username via getGithub()", () => {
            const role = "GitHubUser";
            const newEngineer = new Engineer("Guy", 1, "test@email.com", role);
            expect(newEngineer.getGithub()).toBe(role);
        });
    });
    
});