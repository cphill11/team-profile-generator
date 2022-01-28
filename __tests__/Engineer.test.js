// import & mock necessary modules to create a failing test that will check for proper object creation
const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

jest.mock('../lib/Engineer.js');

// Other 3 classes will extend Employee class + more properties/ methods

// Engineer class
    // github  // returns GitHub username
    // getGithub()
    // getRole()   // overriden to return 'Engineer'

