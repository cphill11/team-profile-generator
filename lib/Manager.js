const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // bring in info from employee
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


// Other 3 classes will extend Employee class + more properties/ methods
// Manager class
    // officeNumber
    // getRole()   // overridden to return 'Manager'

