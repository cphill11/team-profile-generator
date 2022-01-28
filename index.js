// const inquirer required to run the inquirer package
const inquirer = require('inquirer');

// const fs required to run node.js fs module
const fs = require('fs');

// path module of node.js; helps w/ file & directory paths
const path = require('path');

// connects index.js to generateIndex.html
const generateIndex = require ('./utils/generateIndex');


// function created to write html file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function created to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        //console.log(answers.title);
        writeToFile('newIndex.html', generateIndex({...answers}))
    })
}
// Function call used to initialize app
init();




// Employee class is first parent class

// Properties & methods include:
// name
// id
// email
// getName()
// getID()
// getEmail()
// getRole()   // returns 'Employee'


// Other 3 classes will extend Employee class + more properties/ methods
// Manager class
    // officeNumber
    // getRole()   // overridden to return 'Manager'

// Engineer class
    // github  // returns GitHub username
    // getGithub()
    // getRole()   // overriden to return 'Engineer'

// Intern class
    // school 
    // getSchool()
    // getRole()   // overridden to return 'Intern'


//  **** Consider adding validation to ensure proper input ***