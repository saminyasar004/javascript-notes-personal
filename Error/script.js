/*
 * Error Property
 * 1. name
 *    --> EvalError
 *    --> RangeError
 *    --> ReferenceError
 *    --> SyntaxError
 *    --> TypeError
 *    --> URIError
 * 2. message
 */

/* try {
  cnsole.log("Hello World!");
} catch (err) {
  console.log(err.message);
  // throw "Oops";
}
console.log("Error handled"); */

/* let name = "";

try {
  if (name === "") {
    throw "Empty";
  } else if (name !== "samin") {
    throw "Wrong name";
  } else {
    throw "Success";
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("It is from finally");
} */

try {
  console.text("fname");
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}
