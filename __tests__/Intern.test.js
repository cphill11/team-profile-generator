const Intern = require('../lib/Intern.js');

const Manager = require('../lib/Manager.js');

test('constructor school argument', () => {
    // set test variable
    const school = "home"
    const intern = new Intern("name", 1234, "email", school)
        expect(intern.school).toBe(school)
})

test('get School method', () => {
    // set test variable
    const school = "home"
    const intern = new Intern("name", 1234, "email", school)
        expect(intern.getSchool()).toBe(school)
})

test('getRole method', () => {
    // set test variable
    const getrole = 'Intern'
    const intern = new Intern("name", 1234, "email", "school")
        expect(intern.getRole()).toBe(getrole)
})






// Other 3 classes will extend Employee class + more properties/ methods

// Intern class
    // school 
    // getSchool()
    // getRole()   // overridden to return 'Intern'