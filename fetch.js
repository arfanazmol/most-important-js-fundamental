// 1. JSON =>---- stringify, parse

const student = {
  name: 'John',
  age: 25,
  movies: ['jhonwick1', 'jhonwick2'],
};

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj)

// 2. fetch
fetch('url')
  .then(res => res.json())
  .then(data => console.log(data))

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//for