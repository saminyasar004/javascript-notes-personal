/*
 * JavaScript e 4 dhoroner operator ase
 * Arithmetic Operator
 * Assignment Operator
 * Comparison Operator
 * Logical Operator
 * Type Operator
 */

/* ************* Arithmetic Operator ************* */

/*
 * + Addition
 * - Substraction
 * * Multiplication
 * / Division
 * % Modulas (Division Remainder return kore)
 * ** Exponentiation (baseNumber ** power) {Math.pow(baseNumber, power) er moto kaj kore} ES6 Feature
 * ++ Increement
 * -- Decreement
 */

/* **** Modulas **** */

const num1 = 5;
const num2 = 3;

console.log(num1 % num2); // return korbe 2 orthat 5 ke 3 dara vag korle 2 vagshesh thake

/* **** Exponentiation **** */

const num3 = 2;
const num4 = 4;

console.log(num3 ** num4); // 2 to the power 4 = 16 return kore.

/* **** Increement **** */

/*
 * Jodi variable name er age increement likhi tahole age value 1 increement hobe after that total value print hobe.
    - example:
      - var num = 5;
      // - console.log(++num) // return korbe 6
 * Ar jodi variable name er pore increement likhi tahole age ager value print hobe after that tar shathe 1 add hobe.
    - example:
      - var num = 4;
      // - console.log(num++) // return korbe 4
 */

let num5 = 3;

// num5++; // tahole num5 orthat 3 er shathe 1 add hobe = 4

console.log(num5++); // result = 4

console.log(++num5); // result = 4;

/* **** Decreement **** */

/*
 * Jodi variable name er age decreement likhi tahole age value 1 decreement hobe after that total value print hobe.
    - example:
      - var num = 5;
      // - console.log(--num) // return korbe 4
 * Ar jodi variable name er pore decreement likhi tahole age ager value print hobe after that tar shathe 1 substract hobe.
    - example:
      - var num = 4;
      // - console.log(num--) // return korbe 3
 */

let num6 = 3;

// num6++; // tahole num6 orthat 3 er shathe 1 substract hobe = 2

console.log(num6--); // result = 2

console.log(--num6); // result = 2;

/* ************* Assignment Operator ************* */

/*
 * = equal
 * += plus equal
 * -= minas equal
 * *= muliply equal
 * /= divide equal
 * %= modulas equal
 * **= exponentiation
 */

/* modulas equal  */

let num7 = 5;
console.log((num7 %= 3)); // return 2 orthat num7 = 5 % 3 = 2

/* Exponentiation */

let num8 = 2;
console.log((num8 **= 3)); // num8 = 2 ** 3 = 8

/* ************* Comparison Operator ************* */

/*
 * == equalt value
 * === equal value and type
 * != not equal
 * !== not equal value or not equal type
 * > greater than
 * >= greater or equal
 * < less than
 * <= less or equal
 * ? ternary operator
 */

/* ternary operator */

const num9 = 6;
const result = num9 / 3 === 2 ? "yes 2" : "no"; // condition ? if true : if false

console.log(result); // return yes 2

/* ************* Logical Operator ************* */

/*
 * && -> and. if both side of it's condition will passed then it will return true. otherwise return false
 * || -> or. if atleast one side of it's condition will passed then it will return true. otherwise return false
 * ! -> not. it means not.
 */

let num11 = 3;
let num12 = 5;

// let result = num11 < 4 && num12 > 4; // true

// let result = num11 < 4 || num12 < 4; // true

/* ************* Type Operator ************* */

/*
 * typeof - return the type of a variable
 * instanceof - Returns true if an object is an instance of an object type
 */

/* typeof */

const str1 = "saminyasar";
const num10 = 8;
const boolean = false;
let undefinedTxt;
const nullTxt = null;
const dataObject = {
  username: "saminyasar004",
  password: "hello",
};
const array = ["samin", "yasar"];
const myFunc = () => {
  // console.log('yeee');
};

console.log(typeof str1);
console.log(typeof num10);
console.log(typeof boolean);
console.log(typeof undefinedTxt);
console.log(typeof nullTxt);
console.log(typeof dataObject);
console.log(typeof array);
console.log(typeof myFunc);

/* instanceof */

console.log(dataObject instanceof Object); // return true;
