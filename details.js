
class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getDetails() {
        return `Developer details  ,Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }

    calculateAnnualSalary() {
        return this.salary * 12;
    }

}

class Manager extends Employee {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.department = department;
    }

    getDepartment() {
        return `Department: ${this.department}`;
    }

    calculateAnnualSalaryWithBonus() {
        return this.salary * 12 + 5000;
    }

}

class Developer extends Employee {
    constructor(name, age, salary, programmingLanguages) {
        super(name, age, salary);
        this.programmingLanguages = programmingLanguages;
    }

    getProgrammingLanguages() {
        return `Programming Languages: ${this.programmingLanguages}`;
    }

    calculateAnnualSalaryWithIncentive() {
        return this.salary * 12 + 10000;
    }

}

function main() {
    // const name = "Caleb";
    // const age = 22;
    // const salary = 50000;
    // const department = "IT";
    // const programmingLanguages = ["Java", "JavaScript", "Python"];
    
    const manager = new Manager("Elisha",30,20000,"IT");

    const developer = new Developer("Caleb",22,9000,["Java" , "JavaScript" , "Python"]);

    console.log(manager.getDetails());

    console.log(manager.getDepartment());

    console.log("Annual salary with bonus:",manager.calculateAnnualSalaryWithBonus());
    console.log(developer.getDetails());
     console.log(developer.getProgrammingLanguages());
     console.log("Annual salary with incentive:"+developer.calculateAnnualSalaryWithIncentive());
}

main()