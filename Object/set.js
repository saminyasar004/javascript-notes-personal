/*
 * Title: Object set
 * Description:
 * Author: Samin Yasar
 * Date: 01/July/2021
 */

/*
 * set is a collective of unique values
 * each value may occur only one time
 * set's type is an object
 * it is a instanceof Set
 * add(value) --> add new element on the set
 * delete(value) --> delete the given value from the set
 * clear() --> delete all value from the set
 * entries() --> return an array of values
 * has(value) --> return true if the given value exist on the set
 * forEach() --> iterate the whole array. it works exactly same as Array.prototype.forEach()
 * keys() --> return an array of all keys
 * values() --> return an array of all values
 * size --> return the length of the set
 */

const numsArray = [1, 2, 5, 3, 4, 5, 6];

const nums = new Set([...numsArray]);

nums.add(1);
// console.log(nums);

// console.log(nums.entries());
// console.log(nums.values());

// console.log(nums.keys());

// console.log(nums.size);

// console.log(nums.has(4));

// nums.forEach((value, value2, set) => {
//   console.log({ value, value2 });
// });
