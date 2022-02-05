const Employee = require('./Employee')

// extends Engineer as a child of Employee
class Engineer extends Employee{
    constructor(name, id, email, github) {
        // calls on parental properties
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