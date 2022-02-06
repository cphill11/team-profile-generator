const Employee = require('../lib/Employee.js');

// constructor arguments
test('constructor name argument', () => {
    const name = 'Bob'
    const employee = new Employee(name)
        expect(employee.name).toBe(name)
})

test('constructor id argument', () => {
    const id = 1234
    const employee = new Employee("Bob", id)
        expect(employee.id).toBe(id)
})

test('constructor email argument', () => {
    const email = 'bob@gmail'
    const employee = new Employee("Bob", 1234, 'email')
        expect(employee.email).toBe(email)
})

// method arguments
test('get name method', () => {
    const name = 'Bob'
    const employee = new Employee(name)
        expect(employee.getName()).toBe(name)
})

test('get id method', () => {
    const id = 1234
    const employee = new Employee("Bob", id)
        expect(employee.getID()).toBe(id)
})

test('get email method', () => {
    const email = 'bob@gmail'
    const employee = new Employee("Bob", 1234, 'email')
        expect(employee.getEmail()).toBe(email)
})

test('get role  method', () => {
    const role = 'Employee'
    const employee = new Employee("Bob", 1234, 'email')
        expect(employee.getRole()).toBe(role)
})