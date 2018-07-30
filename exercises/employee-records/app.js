// Stores list of employee objects
let employees = [];

// Employee constructor
function Employee (name, jobTitle, salary, status = 'Full Time') {  
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function() {
        console.log('Name: ' + this.name + ', Job Title: ' + this.jobTitle + ', Salary: ' + this.salary + ', Status: ' + this.status)
    }
}

// Create 3 employee records
employees.push(new Employee("Gary Cooper", "Web Developer", "$50,000/yr", "Contract"));
employees.push(new Employee("Audrey Hepburn", "Owner", "$100,000/yr"));
employees.push(new Employee("Grace Kelley", "Marketing Manager", "$80,000/yr", "3/4 Time"));

// runs printEmployeeForm() for each employee in the array
for (let i = 0; i < employees.length; i++) {
    employees[i].printEmployeeForm()
}