const Employee = require('./Employee')

// extends Engineer as a child of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // calls on parental properties
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    // methods
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;