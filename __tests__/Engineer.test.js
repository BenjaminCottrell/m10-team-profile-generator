const Engineer = require("../lib/Engineer");

// tests for Engineer need to have the github username
test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const newEngineer = new Engineer("Guy", 1, "test@email.com", testValue);
  expect(newEngineer.github).toBe(testValue);
});

// Engineer needs to have name, id, email and github
test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const newEngineer = new Engineer("Guy", 1, "test@email.com", "GitHubUser");
  expect(newEngineer.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const newEngineer = new Engineer("Guy", 1, "test@email.com", testValue);
  expect(newEngineer.getGithub()).toBe(testValue);
});