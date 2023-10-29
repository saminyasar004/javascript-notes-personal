/* ************** String Methods ************** */

const str =
  "My name is Samin Yasar. My nickname is Samin. I read in class 11 at KGHS";

console.log(str);

// concat
console.log(str.concat(" Heeee..."));

// charat
console.log(str.charAt(5));

// charcodeat
console.log(str.charCodeAt(6));

// indexOf
console.log(str.indexOf("name"));

// lastIndexOf
console.log(str.lastIndexOf("Samin"));

// padStart
console.log(str.padStart(str.length + 10, 0));

// padEnd
console.log(str.padEnd(str.length + 10, 0));

// replace
console.log(str.replace("Samin Yasar", "Nabil Mahmud"));
console.log(str.replace(/samin( yasar)?/gi, "Nabil Mahmud"));

// slice
console.log(str.slice(5, 8));

// split
console.log(str.split(". "));

// search
console.log(str.search("nickname"));
console.log(str.search(/samin/gi));

// substr
console.log(str.substr(3, 4));

// substring
console.log(str.substring(11, 16));

// trim
console.log(str.trim());

// toUpperCase
console.log(str.toUpperCase());

// toLowerCase
console.log(str.toLowerCase());

// startsWith
console.log(str.startsWith("Samin", 11));

// endsWith
console.log(str.endsWith("Yasar", "22"));

// fromCharCode
console.log(String.fromCharCode(101));

// includes
console.log(str.includes(".", str.length - 5));

// match
console.log(str.match("Samin"));
console.log(str.match("samin"));
console.log(str.match(/samin/gi));

// repeat
console.log(str.repeat(3));

// constructor
console.log(str.constructor.toString());
