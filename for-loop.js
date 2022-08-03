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

