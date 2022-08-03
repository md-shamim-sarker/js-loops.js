# JS-Loops.js

[Reference Link](https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/)

## While Loop
```js
/*-------------------
while (condition) {
  // statement
}
---------------------*/

console.log('-----------------------------------------');

{
    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }

}

console.log('-----------------------------------------');

{
    const arr = ['Shamim', 'Snigdha', 'Sneha', 'Shihab', 'Siyam'];

    let i = 0;

    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
}

console.log('-----------------------------------------');

{
    const arr = [];

    let i = 51;

    while (i <= 55) {
        arr.push(i);
        i++;
    }

    let j = 0;

    while (j < arr.length) {
        console.log(arr[j]);
        j++;
    }
}

console.log('-----------------------------------------');
```

## Do While Loop
```js
/*-------------------
do {
  // statement
} while (condition)
---------------------*/

console.log('-----------------------------------------');

{
    let i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 5)

}

console.log('-----------------------------------------');

{
    const arr = ['Shamim', 'Snigdha', 'Sneha', 'Shihab', 'Siyam'];

    let i = 0;

    do {
        console.log(arr[i]);
        i++;
    } while (i < arr.length)
}

console.log('-----------------------------------------');

{
    const arr = [];

    let i = 51;

    do {
        arr.push(i);
        i++;
    } while (i <= 55)

    let j = 0;

    do {
        console.log(arr[j]);
        j++;
    } while (j < arr.length)
}

console.log('-----------------------------------------');
```

## For Loop
```js
/*--------------------------------------------------
for (initialization; condition; finalExpression) {
  // code
}
----------------------------------------------------*/

// Print 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('----------------------------------');

// Print an array's elements
const arr = ['Shamim', 'Snigdha', 'Sneha', 'Shihab', 'Siyam'];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}
console.log('----------------------------------');

// Push array elements and show them; use break & continue
const arr2 = [];
for (let i = 51; i <= 60; i++) {
    arr2.push(i);
}

for (let i = 0; i < arr2.length; i++) {

    const element = arr2[i];

    if (element == 54) {
        continue;
    }

    if (element > 56) {
        break;
    }

    console.log(element);
}
console.log('----------------------------------');
```

## For In Loop
```js
/*-------------------------
for (property in districts) {
  // code
}
---------------------------*/

const districts = {
    a: 'Dhaka',
    b: 'Rangpur',
    c: 'Lalmonirhat',
    d: 'Rajshahi',
    e: 'Khulna',
    f: 'Barishal',
    g: 'Chattagram',
    h: 'Tangail',
    i: 'Sirajganj',
    j: 'Mymanshingh'
};

for (const key in districts) {
    console.log(key + ': ' + districts[key]);
}
```

## For Of Loop
```js
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
```

## ForEach Loop
```js
/*-------------------------
array.forEach(element => {
    // code
});
---------------------------*/

const arr = ['Shamim', 'Snigdha', 'Sneha', 'Shihab', 'Siyam'];

console.log('----------------------------------------');

{
    arr.forEach(element => {
        console.log(element);
    });
}

console.log('----------------------------------------');

{
    const myFunction = (element) => {
        console.log(element);
    }

    arr.forEach(myFunction);
}

console.log('----------------------------------------');

{
    function myFunction(item) {
        console.log(item);
    }

    arr.forEach(myFunction);
}
console.log('----------------------------------------');
```