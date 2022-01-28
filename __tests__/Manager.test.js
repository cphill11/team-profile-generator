// import & mock necessary modules to create a failing test that will check for proper object creation
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

jest.mock('../lib/Manager.js');

// Other 3 classes will extend Employee class + more properties/ methods
// Manager class
    // officeNumber
    // getRole()   // overridden to return 'Manager'

