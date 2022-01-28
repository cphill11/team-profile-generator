// import & mock necessary modules to create a failing test that will check for proper object creation
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

jest.mock('../lib/Manager.js');