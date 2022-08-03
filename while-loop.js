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