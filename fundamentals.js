// must must must  must be knolagdge

// 1. how to declare a variable using let and const
const fatherName = 'harun or rashid';
let season = 'rain';
season = 'winter';

// 2. condition
// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, ||


if (fatherName === 'harun' || season === 'rain') {
  
}
else if (fatherName === 'harun') {
  
}
else {
  
}

// 3. array declare
//index,
//length,
//push
const numbers = [34, 324, 64, 56,];
numbers[0] = 12;

//4. for loop

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 5. function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

const output = multiply(1, 2);
console.log(output);


// 6. Object
// 3 ways to access properties by name
const students = {
  name: 'harun',
  age: 23,
  city: 'karachi',
}

const othersVariable = 'age';

console.log(students.name); // direct by property
  //access via property name string
console.log(students['city']); //access via property name in a variable
console.log(students['age']);



