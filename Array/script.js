/*
 * javascript does not support associative array
 */

/* ********** the difference between array and object ********** */

// array have number indexes
// object have named indexes

/* ********** the difference between new Array and [] ********** */

// const arrayWithNew = new Array(40, 50); // result = [40, 50]
// const arrayWithSquareBraces = [40, 50]; // result = [40,50]

console.log(arrayWithNew);
console.log(arrayWithSquareBraces);

// // but

// const arrayWithNew2 = new Array(40); // it creates 40 undefined items on it!!!!
// const arrayWithSquareBraces2 = [40]; // result = [40]

console.log(arrayWithNew2);
console.log(arrayWithSquareBraces2);

/* ********* how to recognize an array ********* */

const myArray = ["samin", "yasar", "rahim", "karim"];

console.log(typeof myArray); // this is an object

// but how do I know this is an array

// solution 1:

console.log(Array.isArray(myArray)); // true

// solution 2:

console.log(myArray.constructor.toString().indexOf("Arary"));

// solution 3:

console.log(myArray instanceof Array); // return true

/* ***** array scope ***** */

/*
 * array declare with const have block scope
 * array declare with var have not block scope
 * array declare with let have block scope
 */

const myFamily = [
  "samin",
  "yasar",
  "nabil",
  "mahmud",
  "nizam",
  "uddin",
  "ayesha",
  "akter",
  "nabiha",
  "tahsin",
];

function myFunction() {
  const myFamily = [1, 2, 3, 4];
  console.log(myFamily);
}

myFamily();
console.log(myFamily);

function restParam(...arg) {
  // now arg = [1, 2, 3, 4, 5]
  return arg.flat(Infinity).reduce((acc, el) => {
    return acc + el;
  }, 0);
}

console.log(restParam([1, 2, 3, 4, 5]));
