/*
 * constructor property - return the function that created js's Number property
 * prototype property - allows to add properties and method to an object
 * MAX_VALUE - return the maximum value in javascript
 * MIN_VALUE - return the minimum value in javascript
 * NEGATIVE_INFINITY - return the negetive infinity number in javascript
 * POSITIVE_INFINITY - return the positive infinity number in javascript
 * EPSILON - return the value of Epsilon
 * NaN - represents Not a Number
 * isFinite() - check if a value is a finite number
 * isInteger() - check if a value is an integer
 * isSafeInteger() - check if a value is a safe integer
 * isNaN() - check if a value is not a number
 * toExponential(x) - convert a number to an exponential notation
 * toFixed(x) - foramats the number with x number of digits after the decimal point
 * toLocaleString() - converts a number into a string, based on locale setting
 * toPrecision(x) - formats a number to x length
 * toString() - convert a number to string
 * valueOf() - return the premitive value of a number
 * Number(any) - eta er parameter er value ke number hishebe return kore
 * Number.property - eta Number object er bivinnno property access korar jonno
 * parseInt(any) - eta er parameter er value jodi without decimal hoy tahole eta tar decimal return kore
 * parseFloat(any) - eta er parameter er absolute value return kore
 */

const num1 = 5.6;
const num2 = 4;
const num3 = 3.141592654;
const num4 = "12345934.56790678";
const str1 = "samin";
const str2 = "yasar";

/* ***** constructor property ***** */

/*
 * In JavaScript, the constructor property returns the constructor function for an object.
 *The return value is a reference to the function, not the name of the function:
 * For JavaScript numbers the constructor property returns function Number() { [native code] }
 * For JavaScript strings the constructor property returns function String() { [native code] }
 * For JavaScript booleans the constructor property returns function Boolean() { [native code] }
 */

console.log(num1.constructor); // return [Function: Number]

function myFunc() {
  return "Samin Yasar";
}

console.log(myFunc.constructor.toString()); // return  function Function() { [native code] }

/* ***** prototype property ***** */

/*
 * javascript er kono object er notun kono property or kono method add korte prototype use kora hoy
 * The prototype constructor allows you to add new properties and methods to JavaScript numbers.
 * When constructing a property, ALL numbers will be given the property, and its value, as default.
 * When constructing a method, ALL numbers will have this method available.
 */

Number.prototype.pairMethod = function pairMethod() {
  const resultPair =
    `${this / 2}` > 1 ? `${this / 2} pairs` : `${this / 2} pair`;
  return resultPair;
};

console.log(num2.pairMethod()); // return 2 pairs. karon 4 ti te 2 pairs

class Student {
  constructor(firstName, lastName, className, rollNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.className = className;
    this.rollNumber = rollNumber;
  }
}

Student.prototype.schoolName = "Khilgaon Govt College";

const saminData = new Student("samin", "yasar", "HSC", "22124");

console.log(saminData);

console.log(saminData.schoolName); // return Khilgaon Govt College

/* ***** MAX_VALUE ***** */

/*
 * eta diye javascript er maximum value pawa jay.
 * eta return kore 1.7976931348623157e+308. ei number er upore gele sheta Infinity hishebe count hobe
 */

console.log(Number.MAX_VALUE); // return 1.7976931348623157e+308

/* ***** MIN_VALUE ***** */

/*
 * eta  javascript er minimum number return kore
 * eta return kore 5e-324. ei number er niche gele sheta 0 hishebe count hobe

*/

console.log(Number.MIN_VALUE); // return 5e-324

/* ***** NEGETIVE_INFINITY ***** */

console.log(Number.NEGATIVE_INFINITY); // return -Infinity.

/* ***** POSITIVE_INFINITY ***** */

console.log(Number.POSITIVE_INFINITY); // return Infinity.

/* ***** POSITIVE_INFINITY ***** */

console.log(Number.EPSILON);

/* ***** NaN ***** */

console.log(Number.NaN); // return NaN

console.log(str1 * str2); // return NAN
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
// NaN er type holo Number
console.log(typeof NaN);

/* ***** isFinite() ***** */

/*
 * eta kono number finite kina sheta check kore boolean hishbe return kore
 */

// Number.isFinite(123); //true
// Number.isFinite(-1.23); //true
// Number.isFinite(5 - 2); //true
// Number.isFinite(0); //true
// Number.isFinite("123"); //false
// Number.isFinite("Hello"); //false
// Number.isFinite("2005/12/12"); //false
// Number.isFinite(Infinity); //false
// Number.isFinite(-Infinity); //false
// Number.isFinite(0 / 0); //false

/* ***** isInteger() ***** */

/*
 * eta kono number integer kina sheta check kore boolean hishebe return kore
 */

// Number.isInteger(123); //true
// Number.isInteger(-123); //true
// Number.isInteger(5 - 2); //true
// Number.isInteger(0); //true
// Number.isInteger(0.5); //false
// Number.isInteger("123"); //false
// Number.isInteger(false); //false
// Number.isInteger(Infinity); //false
// Number.isInteger(-Infinity); //false
// Number.isInteger(0 / 0); //false

/* ***** isSafeInteger() ***** */

/*
 * The Number.isSafeInteger() method determines whether a value is a safe integer.
 * A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number (all integers from (2^53 - 1) to -(2^53 - 1))
 */

// Number.isSafeInteger(123) //true
// Number.isSafeInteger(-123) //true
// Number.isSafeInteger(5-2) //true
// Number.isSafeInteger(0) //true
// Number.isSafeInteger(0.5) //false
// Number.isSafeInteger(Math.pow(2, 53)) //false
// Number.isSafeInteger(Math.pow(2, 53) - 1) //true
// Number.isSafeInteger('123') //false
// Number.isSafeInteger(false) //false
// Number.isSafeInteger(Infinity) //false
// Number.isSafeInteger(-Infinity) //false
// Number.isSafeInteger(0 / 0) //false

/* ***** isNan() ***** */

/*
 * The Number.isNaN() method determines whether a value is NaN (Not-A-Number).
 * This method returns true if the value is of the type Number, and equates to NaN. Otherwise it returns false.
 * Number.isNaN() is different from the global isNaN() function. The global isNaN() function converts the tested value to a Number, then tests it.
 * Number.isNaN() does not convert the values to a Number, and will not return true for any value that is not of the type Number.
 */

// Number.isNaN() method tokhoni true return kore jokhon etar vitore value er type number hoy but shegulo opertion korar por sheta NaN hoy

// Number.isNaN(123) //false
// Number.isNaN(-1.23) //false
// Number.isNaN(5-2) //false
// Number.isNaN(0) //false
// Number.isNaN('123') //false
// Number.isNaN("Hello"); //false
// Number.isNaN('2005/12/12') //false
// Number.isNaN('') //false
// Number.isNaN(true) //false
// Number.isNaN(undefined) //false
// Number.isNaN('NaN') //false
// Number.isNaN(NaN) //true
// Number.isNaN(0 / 0) //true

/* ***** toExponential() ***** */

// let num2 = 3.141592654;
console.log(num2.toExponential(4)); // tahole doshomic er pore 4 ghor porjonto stirng hishebe dekhabe
// toExponential() - doshomic er pore koto ghor chai sheta parameter hishebe ney
// parameter optional
console.log(num2.toExponential()); // tahole round korbena

/* ***** toFixed() ***** */

console.log(num3.toFixed(4)); // tahole dshomic er pore 4 ghor porjonto dekhabe

/* ***** toLocaleString() ***** */

/*
 * The toLocaleString() method converts a number into a string, using a local language format.
 */
const commaSeperatedNums = parseFloat(num4).toLocaleString("en", {
  style: "currency",
  currency: "EUR",
  currencyDisplay: "symbol",
});

console.log(commaSeperatedNums); // comma seperate kore return kore

/* *****  ***** */

/* ***** toPrecision() ***** */

console.log(num3.toPrecision(4)); // eta puro number er 4 ghor porjonto dibe. dshomic er age theke

/* ***** toString() ***** */

// let num1 = 5;
console.log(num1.toString()); // return the 5 as a string;
console.log(typeof num1.toString()); // return string

/* ***** valueOf() ***** */

const num5 = 5;
const num6 = 7;
const valueOf = (num5 * num6).valueOf();

console.log(valueOf); // return 35. 5 * 7 = 35

console.log((4 + 7).valueOf()); // return 11. 4 + 7 = 11

/* ***** Number() ***** */

const num7 = "45";

console.log(Number(num7)); // 45 ke number hishebe return korbe
console.log(typeof Number(num7)); // etar type number
console.log(Number(true)); // return 1
console.log(Number(false)); // return 0

console.log(Number("samin")); // jodi eta string theke number e convert korte na pare tahole eta NaN return kore

/* ***** Numeber.property ***** */

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

/* ***** parseInt() ***** */

const num8 = 5.6;
console.log(parseInt(num8)); // eta 5.6 ke round kore dicche

console.log(parseInt(4, 5)); // only first er value return korbe

console.log(parseInt("2004 samin")); // return 2004. karon eta prothome number peyeche

console.log(parseInt("samin 2004")); // return NaN. karon eta prothome number pay nai.

console.log(parseInt("samin")); // jodi parameter e stirng thake tahole eta string ke numbe e convert korte pare na tai eta NaN return kore

/* ***** parseFloat() ***** */

const num9 = 5.789;

console.log(parseFloat(num9)); // eta absolute value dicche

console.log(parseFloat(3.1456, 1.237)); // eta only first er value diche

console.log(parseFloat("2004 samin")); // return 2004. karon eta prothome number peyeche

console.log(parseFloat("samin 2004")); // return NaN. karon eta prothome number pay nai.

console.log(parseFloat("samin")); // jodi parameter e stirng thake tahole eta string ke numbe e convert korte pare na tai eta NaN return kore

/* *****  ***** */
