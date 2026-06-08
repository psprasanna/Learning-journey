// filter(), map(), find(), includes()
/*
map() - can turn data into UI
filter() - can remove items
find() - can pick specific items
includes() - can check conditions
*/

// Map - Used to transform every item in an array.
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num*2);
// console.log(doubled);

const employees = [
    { id: 1, name: "John" , active: true},
    { id: 2, name: "David", active: false },
    { id: 3, name: "Mike" , active: true}
];

const emp_name = employees.map(emp => emp.name);
// console.log(emp_name);


// Filters - Returns matching items
const nums = [1, 2, 3, 4, 5, 6];
const even_num = nums.filter(num=> num%2 ===0);
// console.log(even_num);

const active_emp = employees.filter(emp => emp.active);
// console.log(active_emp);

//Find  - Returns only the first matching item
const second_id = employees.find(emp => emp.id === 2)
// console.log(second_id);

//Chaining Method 
const names = employees
                .filter(emp => emp.active)
                .map(emp => emp.name)

// console.log(names);


//Practice Set 
const emps = [
  {
    id: 1,
    name: "Prakash",
    department: "IT",
    salary: 50000,
    active: true
  },
  {
    id: 2,
    name: "Arun",
    department: "HR",
    salary: 35000,
    active: false
  },
  {
    id: 3,
    name: "Karthik",
    department: "IT",
    salary: 60000,
    active: true
  },
  {
    id: 4,
    name: "Vijay",
    department: "Finance",
    salary: 45000,
    active: true
  }
];

//map 
const empName = emps.map(emp=> emp.name);
// console.log(empName);

//filter 
const it_emps = emps.filter(emp => emp.department === 'IT')
// console.log(it_emps);
const sal_fifty = emps.filter(emp => emp.salary > 50000 )
// console.log(sal_fifty)

//find 
const emp_arun = emps.find(emp => emp.name === "Arun")
// console.log(emp_arun)

//Chaining 
const act_emp = emps.filter(emp => emp.active && emp.department==="IT").map(emp => emp.name);
console.log(act_emp)