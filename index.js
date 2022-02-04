const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generatePage = require('./src/page-template');
const { writeFile } = require('./src/generateHTML.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var allEmployees = [];

const promptUser = () => {
   inquirer.prompt([
        // first manager (answers all questions in it's own prompt); will end up w/ 4-5 (multiple prompts)
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            // if / else will require a name input and not allow a user to simply skip
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
            // if / else will require a name input and not allow a user to simply skip
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
            // if / else will require a name input and not allow a user to simply skip
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
          // if / else will require a name input and not allow a user to simply skip
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
        // allow choice of employee (engineer, intern); each will have their own html setup


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
        // if / else will require a name input and not allow a user to simply skip
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
        // if / else will require a name input and not allow a user to simply skip
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
        // if / else will require a name input and not allow a user to simply skip
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
      // if / else will require a name input and not allow a user to simply skip
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
        // if / else will require a name input and not allow a user to simply skip
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
        // if / else will require a name input and not allow a user to simply skip
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
        // if / else will require a name input and not allow a user to simply skip
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
      // if / else will require a name input and not allow a user to simply skip
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
    // insert use my template stuffs
    
  }

        
 
    // ]);
  
    // };





// const promptProject = portfolioData => {
//     // if there is no 'projects' array property, create one
//     console.log(`
//     =================
//     Add a New Project
//     =================
//     `);
//     // if there is no 'projects' array property, create one
//     if (!portfolioData.projects) {
//     portfolioData.projects = [];
//     }
//     return inquirer.prompt([
//         {
//           type: 'input',
//           name: 'name',
//           message: 'What is the name of your project?',
//           validate: nameInput => {
//              if (nameInput) {
//               return true;
//             } else {
//               console.log('You need to enter a project name!');
//               return false;
//             }
//           }
//         },
//         {
//           type: 'input',
//           name: 'description',
//           message: 'Provide a description of the project (Required)',
//           validate: descriptionInput => {
//             if (descriptionInput) {
//               return true;
//             } else {
//               console.log('You need to enter a project description!');
//               return false;
//             }
//           }
//         },
//         
//         {
//           type: 'input',
//           name: 'link',
//           message: 'Enter the GitHub link to your project. (Required)',
//           validate: linkInput => {
//             if (linkInput) {
//               return true;
//             } else {
//               console.log('You need to enter a project GitHub link!');
//               return false;
//             }
//           }
//         },
//         {
//     ])
//     .then(projectData => {
//         portfolioData.projects.push(projectData);
//         if (projectData.confirmAddProject) {
//             return promptProject(portfolioData);
//         } else {
//             return portfolioData;
//         }
//     });
// };

promptUser()
  // .then(promptProject)
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