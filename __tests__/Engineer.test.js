// import & mock necessary modules to create a failing test that will check for proper object creation
const Engineer = require('../lib/Engineer.js');

test('constructor github argument', () => {
    // set test variable
    const github = 'Chuck'
    const engineer = new Engineer("name", 1234, "email", github)
        expect(engineer.github).toBe(github)
})

test('get github method', () => {
    // set test variable
    const github = 'Chuck'
    const engineer = new Engineer("name", 1234, "email", github)
        expect(engineer.getGithub()).toBe(github)
})

test('getRole method', () => {
    // set test variable
    const getrole = 'Engineer'
    const engineer = new Engineer("name", 1234, "email", "github")
        expect(engineer.getRole()).toBe(getrole)
})