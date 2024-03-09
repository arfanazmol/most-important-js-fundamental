const products = [
  { name: 'laptop', price: 3200, brand: 'lenevo', color: 'white' },
  { name: 'phone', price: 120000, brand: 'iphone', color: 'yellow' },
  { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
  { name: 'camera', price: 10000, brand: 'canon', color: 'gray' },
  { name: 'wacth', price: 3000, brand: 'casio', color: 'silver' },
];

// 1.map

const brands = products.map(product => product.brand);
// console.log(brands);

const price = products.map(product => product.price);
// console.log(price);

const color = products.map(product => product.color);
// console.log(color);

// 2. forEach

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color))

// 3. filter

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

// 4.find

const special = products.find(p => p.name.includes('l'));
// console.log(special);