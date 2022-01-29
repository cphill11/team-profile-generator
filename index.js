// const inquirer required to run the inquirer package
const inquirer = require('inquirer');

// const fs required to run node.js fs module
const fs = require('fs');

// path module of node.js; helps w/ file & directory paths
const path = require('path');

// connects index.js to generateMarkdown.js (orig path)
// const generateMarkdown = require ('./utils/generateMarkdown');
const generatePage = require('./src/page-template');
// connects index.js to generateMarkdown.js (new path)
const { writeFile, copyFile } = require('./src/generateHTML.js');


const promptUser = () => {
   inquirer.prompt([
        // first manager (answers all questions in it's own prompt); will end up w/ 4-5 (multiple prompts)
        // allow choice of employee (engineer, intern)
        // fill in their responses accordingly

        {
            type: 'input',
            name: 'name',
            message: "What is your Manager's name? (Required)",
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
            message: "What is your Manager's ID number? (Required)",
            // if / else will require a name input and not allow a user to simply skip
            validate: idInput => {
                // make sure this returns a number
                if(idInput.match(/^-?\d+$/)){
                    //valid integer (positive or negative) {
                    return true;
                } else {
                    console.log("Please enter Manager's ID number");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Manager's email address? (Required)",
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
    ])   


        
        .then (managerData => {
            // call fxn  for managerUser so it asks what type of employee to ask
        })
    }

            const managerUser = () => { 
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'employee type',
                        message: 'What type of employee is this?',
                        choices: ['Engineer', 'Intern', 'done']
                    }
                
                ]).then 
                    // if engineer... then
                    // if intern... then
                }
       
                // make sure to add option for 'done' when done w/ selection





        {
            type: 'input',
            name: 'name',
            message: "What is your Employee's name? (Required)",
            // if / else will require a name input and not allow a user to simply skip
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter Employee name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your Employee's ID number? (Required)",
            // if / else will require a name input and not allow a user to simply skip
            validate: idInput => {
                // make sure this returns a number
                if(idInput.match(/^-?\d+$/)){
                    //valid integer (positive or negative) {
                } else {
                    console.log('Please enter Employee ID number');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your Employee's email address? (Required)",
            // if / else will require a name input and not allow a user to simply skip
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter Employee email address');
                    return false;
                }
                }
        },  
        
    ]);
  
    };





const promptProject = portfolioData => {
    // if there is no 'projects' array property, create one
    console.log(`
    =================
    Add a New Project
    =================
    `);
    // if there is no 'projects' array property, create one
    if (!portfolioData.projects) {
    portfolioData.projects = [];
    }
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your project?',
          validate: nameInput => {
             if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you build this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'feature',
          message: 'Would you like to feature this project?',
          default: false
        },
        {
          type: 'confirm',
          name: 'confirmAddProject',
          message: 'Would you like to enter another project',
          default: false
        },
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })

  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    // return copyFile();
  })
  .catch(err => {
    console.log(err);
  });