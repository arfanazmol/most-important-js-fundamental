const numbers = [212, 25, 29, 23];
const student = {
  name: 'John',
  age: 25,
  movies: ['jhonwick1', 'jhonwick2', 'jhonwick3'],
};

// 1. template string
const about = `my movies collection is ${student.movies} age of ${student.age} has number ${numbers[2]} movies index of ${student.movies[1]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
}


// spread operator
const newNumbers = [...numbers];
// create  a new array from an older array and add an element
const currentNumbers = [...numbers, 55];


numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(newNumbers);
console.log(numbers);
console.log(currentNumbers);
