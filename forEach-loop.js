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