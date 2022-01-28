// import & mock necessary modules to create a failing test that will check for proper object creation
const Manager = require('../lib/Manager.js');

test('constructor officeNumber argument', () => {
    // set test variable
    const officenumber = 567
    const manager = new Manager("name", 1234, "email", officenumber)
        expect(manager.officeNumber).toBe(officenumber)
})

test('get officeNumber method', () => {
    // set test variable
    const officenumber = 567
    const manager = new Manager("name", 1234, "email", officenumber)
        expect(manager.getOfficeNumber()).toBe(officenumber)
})

test('getRole method', () => {
    // set test variable
    const getrole = 'Manager'
    const manager = new Manager("name", 1234, "email", 567)
        expect(manager.getRole()).toBe(getrole)
})