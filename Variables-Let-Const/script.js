/*
 * var variable re-declare kora jay but (let, const) variable re-declare kora jayna
 * var variable block scoop maintain kore na but (let , const) variable block scoop maintain kore
 * ekta (var , let , const) variable ke ekoi block scoop e ekta theke arekta (var ke let or let ke var or var ke const) e convert kora jay na. kintu different block scoop e eta allowed
 */

var varName = "saminyasar";

var varName = "nabil"; // var keyword diye declare kora variable ke abar eivabe re-assign kora jay.

console.log(varName);

const letName = "nabilmahmud";

// let letName = "samin"; // kintu let eivbabe dui bar declare kora jayna
// var ke re-declare kora jay kintu let ke re-declare kora jay na
// const ke re-declare or re-assign kichui kora jay na

console.log(letName);

// let theke var e or var theke let a convert korte hole ekoi scoop er moddhe eta allow na kintu different scoop er moddhe eta alowed

const varUsername = "samin";

{
  const varUsername = "yasar"; // eita alow
}

console.log(varUsername);

/* global scoop */

/*
 * var er khetre eta global scope e ase. tai window.x valid
 * kintu let er kono global scoop na theke eta Script nam e arekta scope e thake tai let, const er khetre window.x undefined thake
 */

var myName = "samin";

let myLastName = "yasar";

console.log(window.myName); // samin;
console.log(window.myLastName); // undefined;
