// this populated automatically when I was attempting to code for a test
const { expect } = require('@jest/globals');

// import & mock necessary modules to create a failing test that will check for proper object creation
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('creates a new employee card', () => {
    const employee = new Employee('');

    expect(employee.name).toBe();
    expect(employee.id).toBe();
    expect(employee.email).toBe();

})

// Employee class is first parent class

// Properties & methods include:
// name
// id
// email
// getName()
// getID()
// getEmail()
// getRole()   // returns 'Employee'