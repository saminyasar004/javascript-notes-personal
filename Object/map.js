/*
 * Title: Object Map
 * Description:
 * Author: Samin Yasar
 * Date: 01/July/2021
 */

/*
 * a map object hold the key value pairs wheres the key can be any datatypes
 * new Map() --> to create a new Map object
 * set(key, value) --> insert a new key value pairs inside of the created map
 * get(key) --> return the corresponding value of given key
 * entries(key) --> return an array of key/values pair of the map
 * keys() --> return an array of all keys of the map
 * values() --> return an array of all values of the map
 * size --> return the size of the map
 * clear() --> remove all the elements of the map
 * delete(key) --> delete the value of given key
 * has(key) --> return true if the given key exist in the map otherwise return false
 * forEach() --> iterate the whole array. it works exactly same as Array.prototype.forEach()
 */

const ages = new Map();

ages.set("Samin", 17);
ages.set("Nabil", 11);
ages.set("Nabiha", 15);
ages.set("Ayesha", 45);
ages.set("Nizam", 50);

// console.log(ages.get("Nabil"));
// console.log(ages.entries());
// console.log(ages.keys());

// for (i of ages.entries()) {
//   console.log(i);
// }

// console.log(ages.size);

// ages.set("Raihan", 27);
// console.log(ages.delete("Raihan"));
// console.log(ages);

// console.log(ages.has("Raihan"));
// console.log(ages.has("Samin"));

// ages.forEach((value, key, map) => {
//   console.log({ value, key });
// });
