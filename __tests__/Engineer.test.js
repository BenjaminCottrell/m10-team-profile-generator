const Engineer = require("../lib/Engineer");

// tests for Engineer need to have the github username
test("Can set GitHUb account via constructor", () => {
  const githubUsername = "GitHubUser";
  const newEngineer = new Engineer("Guy", 1, "test@email.com", githubUsername);
  expect(newEngineer.github).toBe(githubUsername);
});

// Engineer needs to have name, id, email and github
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const newEngineer = new Engineer("Guy", 1, "test@email.com", "GitHubUser");
  expect(newEngineer.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const role = "GitHubUser";
  const newEngineer = new Engineer("Guy", 1, "test@email.com", role);
  expect(newEngineer.getGithub()).toBe(role);
});