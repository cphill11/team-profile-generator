const Employee = require('./Employee')

// extends Engineer as a child of Employee
class Intern extends Employee{
    constructor(name, id, email, school) {
       // calls on parental properties
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