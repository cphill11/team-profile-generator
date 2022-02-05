const inquirer = require('inquirer');
const fs = require('fs');
// broken
const path = require('path');
const generatePage = require('./src/page-template');
const { writeFile } = require('./src/generateHTML.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var allEmployees = [];

const promptUser = () => {
   inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter Manager's name");
            return false;
          }
        }
      },
        
      {
        type: 'input',
        name: 'id',
        message: 'What is your ID number?',
        validate: idInput => {
          // make sure this returns a number
          if(idInput.match(/^-?\d+$/)){
            //valid integer (positive or negative) {
            return true;
          } else {
            console.log('Please enter ID number');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
          if (emailInput) {
            return true;
            } else {
              console.log("Please enter Manager's email address");
              return false;
            }
          }
      },  
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter Manager's office number");
            return false;
          }
        }
      },  
    ]) 
    .then(answers => {
      console.log(answers)
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      allEmployees.push(manager);
      //console.log(allEmployees);
      directory();
    });
  }  
  
  const directory = () => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'directoryAction',
        message: 'Would you like add an employee to your roster?',
        choices: ["Engineer", "Intern", "I'm done adding Employees"]
      }
    ])
    .then(answers => {
      switch(answers.directoryAction) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default: 
          generateHTML();
      }
    })
  }

  const addEngineer = () => {
    inquirer.prompt ([
      {
        type: 'input',
        name: 'engineerName',
        message: "What is the Engineer's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter Engineer's name");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerId',
        message: "What is the Engineer's ID number?",
        validate: idInput => {
          // make sure this returns a number
          if(idInput.match(/^-?\d+$/)){
           //valid integer (positive or negative) {
           return true;
          } else {
            console.log("Please enter Engineer's ID number");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the Engineer's email address?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter Engineer's email address");
            return false;
          }
        }
      },  
      {
        type: 'input',
        name: 'engineerGitHub',
        message: "What is the Engineer's GitHub username?",  
        validate: gitHubInput => {
          if (gitHubInput) {
            return true;
          } else {
            console.log("Please enter Engineer's GitHub username");
            return false;
          }
        }
      },  
    ]) 
    .then(answers => {
      console.log(answers)
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
      allEmployees.push(engineer);
      //console.log(allEmployees);
      directory();
    });
  }
  
  const addIntern = () => {
    inquirer.prompt ([
      {
        type: 'input',
        name: 'internName',
        message: "What is the Intern's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter Intern's name");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'internId',
        message: "What is the Intern's ID number?",
          validate: idInput => {
            // make sure this returns a number
            if(idInput.match(/^-?\d+$/)){
              //valid integer (positive or negative) {
              return true;
            } else {
              console.log("Please enter Interns's ID number");
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is the Intern's email address?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter Intern's email address");
            return false;
          }
        }
      },  
      {
        type: 'input',
        name: 'internSchool',
        message: "What is the Intern's school name?",
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter Intern's school name?");
            return false;
          }
          }
      },  
    ]) 
    .then(answers => {
      console.log(answers)
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      allEmployees.push(intern);
      //console.log(allEmployees);
      directory();
    });
  }

  const generateHTML = () => {
    console.log(allEmployees);
    generatePage(allEmployees);
    console.log(generatePage(allEmployees));
    // insert use my template stuffs
    // choice of employee (engineer, intern); each will have their own html setup

  }

 promptUser()
    
  // .then(portfolioData => {
  //   return generatePage(portfolioData);
  // })

  // .then(pageHTML => {
  //   return writeFile(pageHTML);
  // })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  //   // return copyFile();
  // })
  // .catch(err => {
  //   console.log(err);
  // });