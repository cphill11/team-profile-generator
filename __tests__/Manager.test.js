const Manager = require('../lib/Manager.js');

// constructor argument
test('constructor officeNumber argument', () => {
    const officenumber = 567
    const manager = new Manager("name", 1234, "email", officenumber)
        expect(manager.officeNumber).toBe(officenumber)
})

// method arguments
test('get officeNumber method', () => {
    const officenumber = 567
    const manager = new Manager("name", 1234, "email", officenumber)
        expect(manager.getOfficeNumber()).toBe(officenumber)
})

test('getRole method', () => {
    const getrole = 'Manager'
    const manager = new Manager("name", 1234, "email", 567)
        expect(manager.getRole()).toBe(getrole)
})