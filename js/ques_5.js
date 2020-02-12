// Part 1:

let employees = [
    { name: 'Emp_A', age: 22, salary: 5500, dob: '25-feb-1997' },
    { name: 'Emp_B', age: 23, salary: 4000, dob: '26-feb-1996' },
    { name: 'Emp_C', age: 22, salary: 3000, dob: '28-feb-1997' },
    { name: 'Emp_D', age: 24, salary: 10000, dob: '3-mar-1995' },
    { name: 'Emp_E', age: 23, salary: 39000, dob: '5-sep-1996' },
    { name: 'Emp_F', age: 20, salary: 500, dob: '10-sep-1999' },
    { name: 'Emp_G', age: 22, salary: 500, dob: '5-sep-1997' },
];

console.log("List of Employee");
console.log(JSON.parse(JSON.stringify(employees)));
console.log("----------------------------------------------------");

// Part 2
filteredData = employees.filter(emp => {
    return emp.salary > 5000;
});

console.log("Employee with salary greater than 5000");
// console.log([...filteredData]);
console.log(JSON.parse(JSON.stringify(filteredData)));
console.log("----------------------------------------------------");


// Part 3
groups = {};
employees.forEach(emp => {
    if (emp.age in groups) {
        groups[emp.age].push(emp);
    } else {
        groups[emp.age] = new Array();
        groups[emp.age].push(emp);
    }
});

console.log("Groups of Employee according to age");
// console.log({...groups });
console.log(JSON.parse(JSON.stringify(groups)));
console.log("----------------------------------------------------");


// Part 4
// Employee with salary less than 1000 and age greater than 20
employees.map((emp, i) => {
    if (emp.salary < 1000 && emp.age > 20) {
        emp.salary *= 5;
    }
});

console.log("List After salary Increase");
console.log(JSON.parse(JSON.stringify(employees)));
console.log("----------------------------------------------------");