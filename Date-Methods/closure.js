/*
 * A closure is a function having access to the parent scope, even after the parent function has closed
 */

const myFunc = (function countNum() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
})();

console.log(myFunc());
console.log(myFunc());
console.log(myFunc());
