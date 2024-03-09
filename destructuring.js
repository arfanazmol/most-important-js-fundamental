// 1. array destructuring
const numbers = [42, 56];
//old syestem.............first process
// const x = numbers[0];
// const y = numbers[1];


// const [x, y] = [42, 56] // secend process

// const [x, y] = numbers; // third process

//Advanced Process
function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
// const [first, secend] = [3344, 45656]
const [first, secend] = boxify(3344, 45656);

// console.log(boxify(3344, 45656));

const student = {
  name: 'John',
  age: 25,
  movies: ['jhonwick1', 'jhonwick2', 'jhonwick3'],
};

const [firstMovie, secendMovie] = student.movies;
// console.log(student)

//object destructuring
const { name1, age1 } = { name: 'alu', age: 14 };
const { name2, age2 } = { id: 12, name: 'alu', salary: 3400, age: 14 };

const employee = {
  id: 'vs code',
  designation: 'developer',
  machine: 'mac',
  language: ['html', 'css', 'js'],
  specification: {
    height: 66,
    weight: 67,
    address: 'chudanga',
    drink: 'water',
    watch: {
      color: 'black',
      price: 550,
      brand:'garmin'
    }
  }
}

const { machine, id } = employee;
const { weight, address } = employee.specification;

console.log(employee)