/*
 * Date() is a object
 * it is static
 * there are some parameter on it
 *  - year
 *  - month
 *  - day
 *  - hour
 *  - second
 *  - millisecond
 * JavaScript count month from 0 to 11. that means March is in 2 instead of 3!
 * if I put only one paramter on Date() it will treats this as millisecond not year!
 * if I put only two digits on first parameter of Date(year) it means it will replaced in previous century.
 *  - Date(12, 3, 14) -> April 14, 1912
 *  - Date(99, 2, 30) -> March 30, 1999
 *  - Date(0, 2, 30) -> March 30, 1900
 */

const dateObj = new Date();

console.log(new Date("March 30, 2004"));
console.log(new Date(2004, 2, 30));
console.log(new Date(0));

// new Date() methods
console.log(dateObj.toDateString());
console.log(dateObj.toISOString());
console.log(dateObj.toUTCString());
console.log(dateObj.toJSON());
console.log(dateObj.toLocaleDateString());
console.log(dateObj.toLocaleTimeString());
console.log(dateObj.toLocaleString());
console.log(dateObj.toString());
console.log(dateObj.toTimeString());

console.log(new Date("30, Mar, 2004"));
