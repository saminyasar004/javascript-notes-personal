/*
 * JavaScript e data types 2 dhoroner
 * primitive data type {jeshob data non-object & jader kono method thake na}
 * complex data type {jeshob data object & jader method thake}
 */

/* ********* Difference between primitive & complex data types ********* */

// primitive = {STRING, NUMBER, BOOLEAN, SYMBOL, UNDEFIEND, NULL}
// non-primitive = {ARRAY, OBJECT, FUNCTION}

// primitive is always copied by VALUE
let a = 1;
const b = a;
// console.log(a , b) =  1 , 1
a = 3;
console.log(a); // 3
console.log(b); // still 1 and not 3   (always copied by value only)

// non-primitive is always copied by REFERENCE
const x = { name: 'Jscript' };
const y = x;
// console.log(x , y)     TWICE =  Object { name: "Jscript" }
x.name = 'Js';
console.log(x); // Js
console.log(y); // Js  {copied by reference} like pointers in C lang

/*
 * JavaScript e primitive data types holo 4 dhoroner
 * string
 * number
 * boolean
 * undefined
 */

/*
 * JavaScript e complex data types holo 2 dhoroner
 * object
 * function
 */

/*
 * null and undefined er moddhe difference holo eder type ek na.
 * null er type of object
 * undefined er type holo undefined
 */

// null er type holo object
// object er type holo object
// array er type holo object
// function er type holo function

/*
 * Object ke onno object er shathe compare kora jay na
 */

// example

const saminObject = {
  firstname: 'Samin',
  lastname: 'Yasar',
  age: 17,
  profession: null,
  education: undefined,
  country: 'Bangladesh',
  programmingLanguage: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
  github: {
    username: 'saminyasar004',
    profileURL: 'https://github.com/saminyasar004',
    password: 'hello',
  },
  fullname() {
    return `${this.firstname} ${this.lastname}`;
  },
};

console.log(saminObject);
