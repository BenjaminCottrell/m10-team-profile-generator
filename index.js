const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];

const numValidation = (name) => {
  let valid = +name
  return ((valid.toString() !== 'NaN') ? true : 'Not a number. Try again.')
}
// function for creating manager - inquirer questions
const beginQuestions = [
  {
    name: 'role',
    type: 'list',
    message: 'Which type of Employee do you want to add?',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
  {
    name: 'name',
    type: 'input',
    message: 'What is the employees name?',
  },
  {
    name: 'id',
    type: 'input',
    message: 'What is the employee ID number?',
    validate: numValidation,
  },
  {
    name: 'email',
    type: 'input',
    message: 'What is their email?',
  }
]
  // take those questions and create a new Manager with the user provided answers
  // push that new Manager to the team members array

  // follow the same pattern for each type of employee
  // build a function for them that uses inquirer


// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they would like to add, based on their choice, run the correesponding function

// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js