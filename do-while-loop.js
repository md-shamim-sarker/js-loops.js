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