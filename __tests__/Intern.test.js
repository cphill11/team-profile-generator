const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

jest.mock('../lib/Intern.js');


// Other 3 classes will extend Employee class + more properties/ methods

// Intern class
    // school 
    // getSchool()
    // getRole()   // overridden to return 'Intern'