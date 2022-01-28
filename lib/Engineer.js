const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, github) {
        // bring in info from employee
        super(name, id, email)
        this.github = github
    }

    // methods
    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}


module.exports = Engineer;



// Engineer class
    // github  // returns GitHub username
    // getGithub()
    // getRole()   // overriden to return 'Engineer'

