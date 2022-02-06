const Intern = require('../lib/Intern.js');

// constructor argument
test('constructor school argument', () => {
    // set test variable
    const school = "home"
    const intern = new Intern("name", 1234, "email", "school")
        expect(intern.school).toBe(school)
})

// method arguments
test('get School method', () => {
    // set test variable
    const school = "home"
    const intern = new Intern("name", 1234, "email", "school")
        expect(intern.getSchool()).toBe(school)
})

test('getRole method', () => {
    // set test variable
    const getrole = 'Intern'
    const intern = new Intern("name", 1234, "email", "school")
        expect(intern.getRole()).toBe(getrole)
})