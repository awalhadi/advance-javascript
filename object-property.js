const studentName = [];
const students = [
    {id: 3, name:"Delwar"},
    {id: 5, name: "Rasel"},
    {id: 4, name: "Shawkot"}
]

for (let i = 0; i < students.length; i++) {
    const eachStudent = students[i];
    const eachStudentName = eachStudent.name;
    studentName.push(eachStudentName);
}

console.log(studentName);

// try with array map
const studentIds = students.map(el => el.id);
console.log(studentIds);
const studentNames = students.map(element => {
    return element.name;
})
console.log(studentNames);

// array filter
const bigger = students.filter(el => el.id > 3);
console.log(bigger);

// array find 
biggerOne = students.find(el => el.id > 4);
console.log(biggerOne);
