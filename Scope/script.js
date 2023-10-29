/* ***** JavaScript has 3 types of Scope *****
 * Block Scope
 * Function Scope
 * Global Scope
 */

/*
 * Block Scope --> let, const
 * Function Scope --> var, let, const
 * Global Scope --> var, let, const
 */

// Local Scope of a variable which is in a Function it's the Function Scope

// a variable declares outside of function it have Global Scope

/*
 * If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
 * This code example will declare a global variable carName, even if the value is assigned inside a function.
 * In "Strict Mode", undeclared variables are not automatically global.
 */

function scope() {
  username = "saminyasar";
  console.log(`${username} from Function`);
}
scope();
console.log(`${username} from Global`);

/*
 * With JavaScript, the global scope is the JavaScript environment.
 * In HTML, the global scope is the window object.
 * Global variables defined with the var keyword belong to the window object
 * Global variables defined with the let keyword do not belong to the window object
 */

/*
 * The lifetime of a JavaScript variable starts when it is declared.
 * Function (Local) variables are deleted when the Function is completed.
 * In a web browser, Global variables are deleted when you close the browser window (or tab).
 */
