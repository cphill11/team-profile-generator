const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, school) {
        // bring in info from employee
        super(name, id, email)
        this.school = school
    }

    // methods
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;

// Other 3 classes will extend Employee class + more properties/ methods

// Intern class
    // school 
    // getSchool()
    // getRole()   // overridden to return 'Intern'