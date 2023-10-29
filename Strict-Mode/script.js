/*
 * Strict mode init by using "use strict"
 * in strict mode programmer can not use undeclared variable (here hoisting will not work)
 * it means the code should be executed in strict mode
 * strict mode is declared by adding "use strict"; at the beginning of a script
 * it can be used in Global Scope or a Local Scope
 */

/*
 * jodi Global Scope er moddhe "use strict"; declare kori tahole global scope er code strict mode e execute hobe
 * jodi Local Scope er moddhe "use strict"; declare kori tahole Local scope er code strict mode e execute hobe
 */

/*
 * Strict mode makes it easier to write "secure" JavaScript.
 * Strict mode changes previously accepted "bad syntax" into real errors.
 * As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
 * In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
 * In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
 */

"use strict";

var i = "samin";

console.log(i)

delete i;

/* 
 * in strict mode deleting a variable, function, object will throw an error
 */

console.log(i)