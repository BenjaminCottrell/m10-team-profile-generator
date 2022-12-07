const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateEngineer = require('./src/htmlGenerate');
const generateIntern = require('./src/htmlGenerate');
const generateManager = require('./src/htmlGenerate');
const startHTML = require('./src/htmlGenerate');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const teamMembers = [];

const numValidation = (name) => {
  let valid = +name
  return ((valid.toString() !== 'NaN') ? true : 'Not a number. Try again.')
}

// function for creating manager - inquirer questions
function beginQuestions() {
  inquirer.prompt(
    [
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
    ])
    // function to use what role has been chosen to determine what additional info the user should input
    .then(function ({ name, role, id, email }) {
      let roleExtraInfo = "";
      if (role === "Engineer") {
        roleExtraInfo = "Github username";
      } else if (role === "Intern") {
        roleExtraInfo = "school name";
      } else {
        roleExtraInfo = "Office Number"
      }
      inquirer.prompt([{
        message: `Enter the team member's ${roleExtraInfo}`,
        name: "roleExtraInfo"
      },
      {
        type: "list",
        message: "Do you want to add more team members?",
        choices: [
          "yes",
          "no"
        ],
        name: "addMembers"
      }])
        // function to add new members to the team
        .then(function ({ roleExtraInfo, addMembers }) {
          let newMember;
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleExtraInfo);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, roleExtraInfo);
          } else {
            newMember = new Manager(name, id, email, roleExtraInfo);
          }
          // push new member to the teamMembers array
          teamMembers.push(newMember);
          addToHtml(newMember)
            .then(function () {
              if (addMembers === "yes") {
                beginQuestions();
              } else {
                finishHtml();
              }
            })
        })
    })
}

function addToHtml(member) {
  const role = member.getRole();
    if (role === "Engineer") {
        generateEngineer();
}   else if (role === "Intern") {
        generateIntern();
}   else {
        generateManager();
}

};

function finishHtml() {
  fs.writeFile(distPath, htmlGenerate(teamMembers), (err) =>
      err ? console.error(err) : console.log('HTML file saved as index.html in dist folder')
  )
}

function init() {
  startHTML();
  beginQuestions();
}

init();

