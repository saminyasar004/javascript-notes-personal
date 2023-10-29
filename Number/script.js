/*
 * JavaScript e 2 dhoroner number types ache
    - Decimal
    - Integer (Without Decimal )
 * JavaScript e extra large or extra small number define korte hole exponent notation use kora hoy
 * JavaScript e string er moddhe amra jodi numeric operation chalai tahole numeric operator gulo shobshomoy string operand ke number e convert korte chay
 * JavaScript e kono illegal number ke NAN(Not a number) diye define kora hoy.
 * JavaScript e kono value legal number kina sheta dekhar jonno isNan() function use kora hoy
 * JavaScript e Infinity holo kono infinite number. eta positive or negetive hote pare
 * bivinno base e number ke convert korte chaile toString() method use kora hoy
  */

/* ***** Exponent Notation ***** */

const exponentNotation = 12e3; // 120000
// ekhane (e) 12*10^4 er kaj koreche

console.log(exponentNotation);

/* ***** Numric Convert ***** */

const num1 = "100";
const num2 = "10";

const addOperation = num1 + num2; // result 10010
const substracOperation = num1 - num2; // result 90
const multiplyOperation = num1 * num2; // result 1000
const divideOperation = num1 / num2; // result 10

/*
 * eta + operator ke string concatinate hishebe chinta koray add er shomoy string concatinate hoye jay
 * kintu onnnano operator eta string ke number e convert korar try kore.
 */

console.log(addOperation);
console.log(substracOperation);
console.log(multiplyOperation);
console.log(divideOperation);

/* ***** NAN ***** */

const str1 = "samin";
const str2 = "yasar";

console.log(str1 * str2); // return NaN
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
// NaN er type holo Number
console.log(typeof NaN);

/* ***** isNan() ***** */

const str3 = "10";
const str4 = "yasar";

console.log(isNaN(str3)); // return false
// karon eta ke she number hishebe dekhe
console.log(isNaN(str4)); // return true
// karon eta ekta string

/* ***** Infinity ***** */

const num3 = Infinity;
if (num3 != Infinity) console.log(`${num3} is not infinity`);
else console.log(`${num3} is infinity`);

// etar type holo number
console.log(typeof Infinity); // return number

/* ***** toString() ***** */

const num4 = 35; // eta ekhon decimal e ase.

console.log(num4.toString(2)); // eta binary e convert korbe
console.log(num4.toString(8)); // eta octal e convert korbe
console.log(num4.toString(10)); // eta decimal e convert korbe
console.log(num4.toString(16)); // eta hexadecimal e convert korbe
console.log(num4.toString(32)); // et 32 base e convert korbe

/* *****  ***** */
