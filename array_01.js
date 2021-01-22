var myArray = ["marca", 3, "palabra"];

console.log(myArray.length);

console.log( myArray[0]);

console.log(Array.isArray(myArray));
console.log(Array.isArray(myArray[0]));

console.log(myArray.toString());

var otroArray = ["modelo", 2];

var arrayLargo = myArray.concat(otroArray);

console.log(arrayLargo);

console.log(arrayLargo.slice(0,4));