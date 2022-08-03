/*-------------------------
for (variable of object) {
  // code
}
---------------------------*/

const arr = ['Shamim', 'Snigdha', 'Sneha', 'Shihab', 'Siyam'];

console.log('--------------------------------------------------');

console.log(arr);

console.log('--------------------------------------------------');

for (const iterator of arr) {
    console.log(iterator);
}
console.log('-------------------------------');

const myMap = new Map();

myMap.set(1, 'Mango');
myMap.set(2, 'Banana');
myMap.set(3, 'Grapes');
myMap.set(4, 'Cherry');
myMap.set(5, 'Apple');

console.log(myMap);

console.log('-------------------------------');

for (const iterator of myMap) {
    console.log(iterator);
}

console.log('-------------------------------');

const mySet = new Set();

mySet.add('Dhaka');
mySet.add('Rangpur');
mySet.add('Rajshahi');
mySet.add('Lalmonirhat');
mySet.add('Barishal');

console.log(mySet);

console.log('-------------------------------');

for (const iterator of mySet) {
    console.log(iterator);
}

console.log('-------------------------------');