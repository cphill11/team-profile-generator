// import & mock necessary modules to create a failing test that will check for proper object creation
const Employee = require('../lib/Employee.js');

test('constructor name argument', () => {
    // set test variable
    const name = 'Bob'
    const employee = new Employee(name)
        expect(employee.name).toBe(name)
})


test('constructor id argument', () => {
    // set test variable
    const id = 1234
    const employee = new Employee("Bob", id)
        expect(employee.id).toBe(id)
})

test('constructor email argument', () => {
    // set test variable
    const email = 'bob@gmail'
    const employee = new Employee("Bob", 1234, email)
        expect(employee.email).toBe(email)
})

// start methods; use () in GetName b/c it's a method.
test('get name method', () => {
    // set test variable
    const name = 'Bob'
    const employee = new Employee(name)
        expect(employee.getName()).toBe(name)
})


test('get id method', () => {
    // set test variable
    const id = 1234
    const employee = new Employee("Bob", id)
        expect(employee.getID()).toBe(id)
})

test('get email method', () => {
    // set test variable
    const email = 'bob@gmail'
    const employee = new Employee("Bob", 1234, email)
        expect(employee.getEmail()).toBe(email)
})

test('get role  method', () => {
    // set test variable
    const role = 'Employee'
    const employee = new Employee("Bob", 1234, 'email')
        expect(employee.getRole()).toBe(role)
})