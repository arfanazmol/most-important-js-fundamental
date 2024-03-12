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
const numbers = [23, 45, 78, 46, 3, 34]
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in

// add or remove from an array
const products = [
  { name: 'laptop', price: 3200, brand: 'len', color: 'white' },
  { name: 'phone', price: 120000, brand: 'HTC', color: 'yellow' },
  { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
  { name: 'camera', price: 10000, brand: 'canon', color: 'gray' },
  { name: 'wacth', price: 3000, brand: 'casio', color: 'silver' },
];

const newProduct = { name: 'webcam', price: 700, brand: 'lal' }

//copy products array and then add newproduct
const newProducts = [...products, newProduct];

// cerate a new array without one specefic item
// remove phone means create a new array without the phone
const remaining = product.filter(p => p.name !== 'phone');
