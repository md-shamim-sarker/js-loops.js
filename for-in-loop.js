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