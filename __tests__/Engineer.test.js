const Engineer = require('../lib/Engineer.js');

// constructor argument
test('constructor github argument', () => {
    const github = 'Chuck'
    const engineer = new Engineer("name", 1234, "email", github)
        expect(engineer.github).toBe(github)
})

// method arguments
test('get github method', () => {
    const github = 'Chuck'
    const engineer = new Engineer("name", 1234, "email", github)
        expect(engineer.getGithub()).toBe(github)
})

test('getRole method', () => {
    const getrole = 'Engineer'
    const engineer = new Engineer("name", 1234, "email", "github")
        expect(engineer.getRole()).toBe(getrole)
})