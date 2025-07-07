const employees = [
    { id: 1, name: 'David', age: 24, department: 'IT', salary: 80000 },
    { id: 2, name: 'Angel', age: 18, department: 'IT', salary: 80000 },
    { id: 3, name: 'Mike', age: 28, department: 'IT', salary: 40000 },
];

function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}<p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}


const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function calculateAverageSalary() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    const averageSalary = totalSalaries / employees.length;
    alert(`Average Salary: $${averageSalary.toFixed(2)}`);function calculateTotalSalaries = 
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById(`employeeDetails`).innerHTML = hrEmployeesDisplay;
}

function findEmployeeId(employeeId) {
    const foundEmployee = employees.find((employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeeDelatils').innerHTML = `<p>${foundEmployee.id}: ${doundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}<p>`;
    }
    else {
        document.getElementById('employeeDelatils').innerHTML = 'no employee has been found with this ID';

    }
}

    function findEmployee(employeeId) { 
        const foundEmployee = employees.find(employee => employee.id === employeeId);
        if (foundEmployee) {
            document.getElementById('employeeDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name}</p>`;
        }

    }