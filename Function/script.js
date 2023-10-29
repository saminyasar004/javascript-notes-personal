/*
 * Function Parameter
 * Function Arguments
 * Function Constructor
 * Function Invoking
 * Anonymous Function
 * Arrow Function
 * Defualt Parameter
 * Premitive VS Object Arguments
 */

// Function Parameter
function myFunc(a, b) {
  /* here a & b is parameters of myFunc */
  console.log(a * b);
}

var x = 10;
var y = 5;

// Function Arguments
myFunc(x, y); /* here x & y is arguments of myFunc */

function takeArg() {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

takeArg(1, 2, 3, 4, 5, 6, 7);

// Function Constructor
const sumFunc = new Function("a", "b", "return a + b");

let funcCall = sumFunc(3, 2);

console.log(funcCall);

// Function Invoking (call function)
function subFunc(x, y) {
  console.log(x - y);
}

subFunc(10, 7);

// Anonymous Function

const anonymouseFunc = function () {
  console.log(`This is from Anonymous Function...!`);
};

anonymouseFunc();

// Arrow Function
/*
 * Arrow Function do not have their own this.
 * Arrow Function must be defined before their used
 * Arrow Function are not hoisted. but if I put an arrow function in a variable then that variable will be hoisted
 * I can ommit return keyword in one line statement arrow function
 */

let devideFunc = (x, y) => x / y;

console.log(devideFunc(50, 5));

// Default Parameter

function twoSum(x = 0, y = 0) {
  console.log(x + y);
}

twoSum();
twoSum(4, 8);

// Premitive VS Object Arguments
/*
 * Premitive Arguments stored by copying values
 * Object Arguments stored by reference
 * If I pass a premitive values as a function parameter then inside of this function If I will change the value of the parameter it will not change the original premitive values but If I pass an Object as function parameter and If I will any change of it inside function it will change the original Object.
 */

const saminObj = {
  firstName: "Samin",
  lastName: "Yasar",
};

function getKeysValues(obj) {
  obj.age = 17;
  for (i in obj) {
    console.log(obj[i]);
  }
}

getKeysValues(saminObj);
console.log(saminObj);

var num1 = 4;

function defineNum(num1) {
  num1 = 10;
  return num1;
}

console.log(num1);
console.log(defineNum(num1));
console.log(num1);

// Funtion in Object Constructor
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const obj1 = new Rectangle(45, 60);
console.log(obj1.getArea());
