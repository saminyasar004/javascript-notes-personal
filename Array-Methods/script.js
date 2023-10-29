/*
 * constructor - return the function that created Array object's prototype
 * length - access to the array element
 * prototype - to add new property and method in an Array object
 * delete - use to delete array element. change that element to undefined
 * toString() - convert an array to a string (comma seperated)
 * join(seperator) - joins all array element using seperator
 * pop() - remove the last element of the array. return the removed element
 * push(element) - add new element at the end of the array. return the length of total array
 * shift() - remove the first element of the array. return the removed element
 * unshift(element) - add new element at the begining of the array. return the length of total array
 * splice(startPos, howmanyRemove, elem, elem...) - add or remove element of an array
 * concat(elem, elem...) - creates a new array by concatinating arrays. return the new array
 * slice(startPos, endPos) - slicing a part of an array
 * copyWithin(targetToPaste, startToCopy, endToCopy) - copies array elements within the array, to and from specified positions
 * entries() - returns a key/ value pair Array Iteration Object
 * every((currentEl, currentInd, originalArray)) - checks if every element in an array pass a test
 * fill(value, startPos, endPos) - fill the elements in an array with a static value
 * filter((currentEl, currentInd, originalArray)) - creates a new array with every element in an array that pass a test
 * flat(depth) - return a distructured array from a (depth) times nested array
 * find((currentEl, currentInd, originalArray)) - return the value of the first element in an array that pass a test
 * findIndex((currentEl, currentInd, originalArray)) - returns the index of the first element in an array that pass a test
 * forEach((currentEl, currentInd, originalArray)) - calls a function for each array element
 * from() - creates an array from an object (string, number, iterable object)
 * includes(element, startPos) - check if an array contains the specified element
 * indexOf(element, startPos) - search the array for an element and returns the first occurance position
 * isArray(object) - check if an object (parameter) is an array
 * keys() - returns a array iteration object, containing the keys of the original array
 * lastIndexOf(element, startPos) - search the array for an element, starting at the end, and returns its position
 * map((currentEl, currentInd, originalArray)) - creates a new array with the result of calling a function for each array element
 * reduce((accumulator, currentEl, currentInd, originalArray), initialValue) - reduce teh values of an array to a single value (going left to right)
 * reduceRight((accumulator, currentEl, currentInd, originalArray), initialValue) - reduce the values of an array to a single value (going right to left)
 * reverse() - reverses the order of the elements in an array
 * some((currentEl, currentInd, originalArray)) - chcks if any of the elements in an array pass a test
 * sort() - sorts the elements of an array
 * valueOf() - returns teh primitive value of an array
 */

/* ************ Array method which change the original array ************
 * pop()
 * shift()
 * push(element)
 * unshift(element)
 * splice(startPos, howmanyRemove, elem, elem...)
 * copyWithin(targetToPaste, startToCopy, endToCopy)
 * fill(value)
 * reverse()
 * sort()
 */

const bsArray = ["Samin", "Yasar", "Nabil", "Mahmud", "Nabiha", "Tahsin"];
const randomNames = ["rahim", "karim", "sakib", "rahim", "samin", "rahim"];
const fruitesArray = ["Apple", "Banana", "Cherry", "Orange", "Mango", "Lichy"];
const ageArray = [18, 53, 45, 17, 13, 11];
const numsArray = [3, 7, 8, 2, 5, 13, 11, 66, 57, 99];
const bsArrayKeys = bsArray.keys();
const votes = ["Yes", "No", "No", "Yes", "Absent", "No", "Yes", "Absent"];
const products = [
  {
    name: "Laptop",
    quantity: 2,
    price: 1000,
  },
  {
    name: "Desktop",
    quantity: 1,
    price: 1500,
  },
  {
    name: "Smart Phone",
    quantity: 3,
    price: 500,
  },
];

/* ********** constructor ********** */

/*
 * eta array er constructor function return kore
 */

// console.log(bsArray.constructor.toString()); // return function Array() { [native code] }

/* ********** length ********** */

// console.log(fruitesArray.length); // return 6

/* ********** prototype ********** */

// array er medium ber korar jonno custom function

Array.prototype.mediumOf = function () {
  const len = parseFloat(this.length);
  let result = [];
  if (len % 2 === 0) {
    result = result.concat(this[len / 2 - 1], this[len / 2 + 1 - 1]);
  } else if (len % 2 !== 0) {
    result = result.concat(this[Math.floor(len / 2)]);
  }
  return result;
};

// console.log(fruitesArray.mediumOf()); // return ['Cherry, 'Orange']

/* ********** delete ********** */

/*
 * eta deleted element ke undefined kore dey tai delete korar jonno pop() or shift() use kora better
 */

// console.log(delete bsArray[2]); // return true
// console.log(bsArray); // 2 no element ke undefined kore dey
// console.log(delete bsArray[10]); // return true

/* ********** toString() ********** */

// console.log(bsArray.toString()); // return Samin,Yasar,Nabil,Mahmud,Nabiha,Tahsin

/* ********** join(seperator) ********** */

// console.log(fruitesArray.join(" ~ ")); // return Apple ~ Banana ~ Cherry ~ Orange ~ Mango ~ Lichy

/* ********** pop() ********** */

/*
 * eta er array theke last element ta remove kore dey
 * je element ta remove koreche sheta return kore
 * eta original array ke change kore
 */

// console.log(bsArray.pop()); // return tahsin

// console.log(bsArray); // tahsin chara baki shob return kore

/* ********** push(element) ********** */

/*
 * eta array er last e ekta new element add kore
 * eta element add korar por array er length joto holo sheta return kore
 * er parameter er moddhe joto khushi toto element add korte parbo
 * eta original array ke change kore
 */

// console.log(fruitesArray.push("Water-Melon")); // return 7
// console.log(fruitesArray); // return ['Apple','Banana','Cherry','Orange','Mango','Lichy','Water-Melon']

/* ********** shift() ********** */

/*
 * eta er array er first element ta remove kore
 * eta je element ta remove koreche (first element) sheta return kore
 * eta original array ke change kore
 */

// console.log(fruitesArray.shift()); // return Apple
// console.log(fruitesArray); // return [ 'Banana', 'Cherry', 'Orange', 'Mango', 'Lichy' ]

/* ********** unshift(element) ********** */

/*
 * eta array er first e ekta element add kore
 * eta array er length return kore
 * er parameter er moddhe joto khusi toto element add korte parbo
 * eta original array ke change kore
 */

// console.log(bsArray.unshift("Nizam")); // return 7
// console.log(bsArray); // return ['Nizam','Samin','Yasar','Nabil','Mahmud','Nabiha','Tahsin']

/* ********** splice(startPos, howmanyRemove, elem, elem....) ********** */

/*
 * eta first parameter hishebe ney kon index theke splice start korbe
 * eta second parameter hishebe ney koyta element remove korbe
 * er pore bole dite hoy ki ki element add korbo. eta unlimited hote pare
 * eta deleted items gulo ke array akare return kore
 * eta original array ke change kore
 */

// to add element an array

// console.log(bsArray.splice(2, 0, "Nizam", "Uddin")); // reutrn []
// console.log(bsArray); // return ['Samin', 'Yasar','Nizam','Uddin','Nabil','Mahmud','Nabiha',Tahsin']

// to remove element from an array

// console.log(fruitesArray.splice(0, 1)); // return removed array
// console.log(fruitesArray); // return [ 'Banana', 'Cherry', 'Orange', 'Mango', 'Lichy' ]

// to add and remove element

// console.log(fruitesArray.splice(0, 1, "Papya")); // return removed array
// console.log(fruitesArray); // return [ 'Papya', 'Banana', 'Cherry', 'Orange', 'Mango', 'Lichy' ]

/* ********** concat() ********** */

/*
 * eta array ke concat kore ekta new array return kore
 * eta original array gulo ke change kore na
 * eta unlimited arguments ney concat korar jonno
 */

// console.log(bsArray.concat(fruitesArray)); // return ['Samin', 'Yasar','Nabil','Mahmud','Nabiha',Tahsin','Apple','Banana','Cherry',Orange','Mango','Lichy']

// console.log(bsArray); // return [ 'Samin', 'Yasar', 'Nabil', 'Mahmud', 'Nabiha', 'Tahsin' ]
// console.log(fruitesArray); // return [ 'Apple', 'Banana', 'Cherry', 'Orange', 'Mango', 'Lichy' ]

// eta string o add kore (array er last element hishebe)

// console.log(bsArray.concat("Nizam")); // return ['Samin','Yasar','Nabil','Mahmud','Nabiha','Tahsin','Nizam']

/* ********** slice(startPos, endPos) ********** */

/*
 * eta ekta array theke startPos(parameter) theke endPos(parameter) porjonto kete oi part ta return kore
 * eta ekta array theke ekta part kete return kore
 * eta original array ke change kore na
 * jodi second parameter na dei tahole eta start position theke ekdom end porjonto slice korbe
 */

// console.log(bsArray.slice(0, 2)); // return ['Samin', 'Yasar']
// console.log(bsArray); // return [ 'Samin', 'Yasar', 'Nabil', 'Mahmud', 'Nabiha', 'Tahsin' ]

// console.log(fruitesArray.slice(4)); // return [ 'Mango', 'Lichy' ]

/* ********** copyWithin(targetToPaste, startToCopy, endToCopy) ********** */

/*
 * The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
 * (first parameter) holo target index mane ami copied element ke kon index theke paste kora start korbo
 * (second parameter) holo ami kon index theke copy kora start korbo (default: 0)
 * (third parameter) holo ami kon index e giye copy kora sesh korbo (default: array.length)
 * eta original array ke change kore
 */

// console.log(bsArray.copyWithin(2, 0, 2)); // ['Samin','Yasar','Samin','Yasar','Nabiha','Tahsin']

// console.log(fruitesArray.copyWithin(3)); // ['Apple','Banana','Cherry','Apple','Banana','Cherry']

/* ********** entries() ********** */

/*
 * eta ekta array er index & value gulo ke pair kore return kore
 * eta original array ke change kore na
 * it's return 👇
  - [index, value]
  - [index, value]
  - [index, value]
 */

// for (i of bsArray.entries()) {
//   console.log(i);
// }

/* ********** every((currentEl, currentInd, originalArray)) ********** */

/*
 * every((currentEl, currentInd, originalArray)) - eta array er prottekta element er moddhe iteratre kore.
 * eta dekhe je array er prottek ta element condition pass kore kina
 * jodi array er kono element condition false return kore tahole every method shathe shathe false return korbe. and tarporer element gulor jonno ar check korbe na
 * kintu jodi true return kore tahole every method o true return korbe
 * eta original array ke change kore na
 */

// jodi ami direct function diye call kori

// ageArray.every((currentEl, currentInd, originalArray) => {
//   console.log(currentEl > 15);
//   return "h";
// });

// jodi ami ekta variable create kore then call kori

// let result = ageArray.every((currentEl, currentInd, originalArray) => {
//   return currentEl > 15;
// });

// console.log(result); // return false. karon shobgulo element 15 er cheye boro na

/* ********** fill(value, startPos, endPos) ********** */

/*
 * fill(value, startPos, endPos) - eta er parameter er moddhe deya value diye original array er startPos(parameter) theke endPos(parameter) replace kore dey.
 * etar second parameter holo startPos. default 0
 * etar third parameter holo endPos. default array.lenght
 * eta replace korar por puro array ta return kore
 * eta original array ke change kore
 */

// console.log(fruitesArray.fill("Kiwi")); // ['Kiwi','Kiwi','Kiwi','Kiwi','Kiwi','Kiwi']
// console.log(fruitesArray); // ['Kiwi','Kiwi','Kiwi','Kiwi','Kiwi','Kiwi']

// console.log(bsArray.fill("Badshah", 3, 5)); // ['Samin','Yasar','Nabil','Badshah','Badshah','Tahsin']
// console.log(bsArray); // ['Samin','Yasar','Nabil','Badshah','Badshah','Tahsin']

/* ********** filter((currentEl, currentInd, originalArray)) ********** */

/*
 * filter((currentEl, currentInd, originalArray)) - eta array er protita element er vitor diye iterate kore and jeshob element gulo condition pass kore shudhu oishob element gulo ke array akare return kore
 * eta ekta new array return kore
 * eta original array ke change kore na
 * jodi kono element condition pass na kre tahole empty array return kore
 */

// let result = ageArray.filter((currentEl, currentInd, originalArray) => {
//   return currentEl >= 18; // jeshob value 18 er equal or boro hobe only shegulo array akare return korbe
// });

// console.log(result); // [18,53,45]

// let numsArray = [12, 15, 17];

// let result = numsArray.filter((currentEl) => {
//   return currentEl >= 18;
// });

// console.log(result);

/* ********** flat(depth) ********** */

// flat(depth),
// depth is optional: how deep a nested array structure
//		should be flattened.
//		default value of depth is 1

const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* ********** find((currentEl, currentInd, originalArray)) ********** */

/*
 * find((currentEl, currentInd, originalArray)) - array er moddhe first je element ta condition pass kore she element ta return kore
 * jodi kono element e condition pass na kore tahole undefined return kore
 * eta original array er kono change kore na
 */

// let result = ageArray.find((currentEl, currentInd, originalArray) => {
//   return currentEl >= 15; // first je element ta 15 er shoman or boro pabe sheta return kore
// });

// console.log(result); // return 18 karon first element jeta condition pass kore sheta holo 18

// let result = ageArray.find((currentEl, currentInd, originalArray) => {
//   return currentEl >= 500; // first je element ta 500 er shoman or boro pabe sheta return kore
// });

// console.log(result); // return undefined karon kono element e condition pass kore na

/* ********** findIndex((currentEl, currentInd, originalArray)) ********** */

/*
 * findIndex((currentEl, currentInd, originalArray)) - array er first je element ta condition pass kore she element er index return kore
 * jodi kono element condition pass na kore tahole -1 return kore
 * eta original array er kono change kore na
 */

// let result = ageArray.findIndex((currentEl, currentInd, originalArray) => {
//   return currentEl >= 15; // first je element ta 15 er shoman or boro pabe she element er index return kore
// });

// console.log(result); // return 18 karon first element jeta condition pass kore she element er index holo 0

// let result = ageArray.findIndex((currentEl, currentInd, originalArray) => {
//   return currentEl >= 500; // first je element ta 500 er shoman or boro pabe she element er index return kore
// });

// console.log(result); // return -1 karon kono element e condition pass kore na

/* ********** forEach((currentEl, currentInd, originalArray)) ********** */

/*
 * forEach() method calls each items in an array
 * parameter
 *  - function(currentElement, currentInd, originalArray)
 *  - this
 */

bsArray.forEach((currentEl, currentInd, originalArr) => {
  // console.log(currentEl); // Samin Yasar Nabil Mahmud Nabiha Tahsin
});

/* ********** from() ********** */

/*
 * The Array.from() method returns an Array object from any object with a length property or an iterable object.
 */

// console.log(Array.from("asdf")); // [ 'a', 's', 'd', 'f' ]

// console.log(Array.from(bsArray)); // [ 'Samin', 'Yasar', 'Nabil', 'Mahmud', 'Nabiha', 'Tahsin' ]

/* ********** includes(element) ********** */

/*
 * includes() check if an array contains a specified element
 * return boolean (true or false)
 * parameter
 *  - element
 *  - startPos
 */

// console.log(fruitesArray.includes("Mango")); // true
// console.log(bsArray.includes("Rahim")); // false

// console.log(bsArray.includes("Nabiha", 3)); // true. 3 no index por Nabiha ase

/* ********** indexOf(element, startPos) ********** */

/*
 * indexOf() method searches the array for the specified element & return it's position
 * if it find more occurance it will return the first occurance
 * if it can't find it will return -1
 * parameter
 *  - element
 *  - startPos
 */

// console.log(bsArray.indexOf("Nabil")); // 2

// console.log(fruitesArray.indexOf("Mango", 2)); // 4

// console.log(bsArray.indexOf("Ayesha")); // -1

/* ********** isArray() ********** */

/*
 * isArray(object) method determine if an object is an array
 * return boolean
 *  - true if the given object is an array
 *  - false if the given object is not a array
 */

// console.log(Array.isArray(bsArray)); // true

/* ********** keys() ********** */

/*
 * keys() method creates and Array Iterator Object with contains the keys of the array
 * it has no parameter
 * it will returns only the array's key
 */

for (i of bsArrayKeys) {
  // console.log(i); // only returns the key of bsArray
}

/* ********** lastIndexOf(element, startPos) ********** */

/*
 * lastIndexOf(element, startPos) searches the array for a specified item and returns it's position
 * the searche will start the specified position
 * if the second parameter is omitted it will start to searching at the end of the array
 * if it will can't find any element it will return -1
 * if the searched term contains more time it will returns the last occurance
 */

// console.log(randomNames.lastIndexOf("rahim", 3)); // 3. cause the last occurance is at index 3

// console.log(randomNames.lastIndexOf("nabil")); // -1

/* ********** map((currentEl, currentInd, originalArray)) ********** */

/*
 * map() method will create a new array with the result of calling a function for every arry element
 * map() method doesn't execute if the array has no value
 * if i will put a comparison condition it will returns an array of some booleans with which elements passes the condition
 */

console.log(
  ageArray.map((el) => {
    return el > 20;
  })
); // [ false, true, true, false, false, false ]

console.log(
  ageArray.map((el) => {
    return el * 10;
  })
); // [ 180, 530, 450, 170, 130, 110 ]

const nameObj = [
  { fname: "samin", lname: "yasar" },
  { fname: "nabil", lname: "mahmud" },
];

function getFullname(obj) {
  return [obj.fname, obj.lname].join(" ");
}

console.log(nameObj.map(getFullname)); // [ 'samin yasar', 'nabil mahmud' ]

const bsArrayUpperCase = bsArray.map((el) => {
  return el.toUpperCase();
});

console.log(bsArrayUpperCase);

/* ********** reduce((accumulator, currentEl, currentInd, originalArray), initialValue) ********** */

/*
 * The reduce() method reduces the array to a single value.
 * The reduce() method executes a provided function for each value of the array (from left-to-right).
 * The return value of the function is stored in an accumulator (result/total).
 * parameter (callbackFunction(currentEl, currentInd, originalArray), initialValue)
 *  - accumulator holo jeta ke primary value dhore shobgulo operation chalabe. default vabe initialValue er value e holo accumulator
 *  - jodi initialValue omitted thake tahole eta accumulator ke primary value hishebe ney
 * finally accumulator ke return kore
 */

const sumOfAges = ageArray.reduce((acc, el) => {
  return acc + el;
}, 0);

console.log(sumOfAges);

const substractOfAges = ageArray.reduce((acc, el) => {
  return acc - el;
}, 0);

console.log(substractOfAges);

const olderAge = ageArray.reduce((acc, el) => {
  return Math.max(acc, el);
}, 0);

console.log(olderAge);

const elderAge = ageArray.reduce((acc, el) => {
  return Math.min(acc, el);
});

console.log(elderAge);

const countVotes = votes.reduce((acc, el) => {
  if (acc[el]) {
    acc[el]++;
  } else {
    acc[el] = 1;
  }
  return acc;
}, {});

console.log(countVotes);

/* ********** reduceRight((accumulator, currentEl, currentInd, originalArray), initialValue) ********** */

/*
 * The reduce() method reduces the array to a single value.
 * The reduce() method executes a provided function for each value of the array (from right-to-left).
 * The return value of the function is stored in an accumulator (result/total).
 * parameter (callbackFunction(currentEl, currentInd, originalArray), initialValue)
 *  - accumulator holo jeta ke primary value dhore shobgulo operation chalabe. default vabe initialValue er value e holo accumulator
 *  - jodi initialValue omitted thake tahole eta accumulator ke primary value hishebe ney
 * finally accumulator ke return kore
 */

/* same as reduce() method. just ulta */

/* ********** reverse() ********** */

/*
 * reverse() method reverses the order of the elements in an array
 * it returns the array with reverses order
 * reverse() method change the original array
 */

// const reversedArra = bsArray.reverse();

// console.log(bsArray);
// console.log(reversedArra);

/* ********** some((currentEl, currentInd, originalArray)) ********** */

/*
 * some() method checks if any element of the array passes the given condition
 * jodi ontoto ekta element condition pass kore tahole e ei method true return kore. otherwise eta false return kore
 * eta original array ke change kore na
 * eta every() method er ekdom ulta
 */

const checkAdultContains = ageArray.some((el) => {
  return el < 18;
});

console.log(checkAdultContains);

const checkEvenNums = numsArray.some((el) => {
  return el % 2 === 0;
});

console.log(checkEvenNums);

/* ********** sort() ********** */

/*
 * sort() method helps to sorted an array element
 * sort() method change the original array
 * sort() method kono array of numbers er upore apply korle eta oi array er element ke number theke string e convert kore tarpor oi string er first index onujayi sort kore
 *  - arr = [12, 24, 36, 44, 59] -> sort() -> [12, 24, 36, 44, 59]
 *  - arr = [12, 100, 24, 36, 44, 59] -> sort() -> [100, 12, 24, 36, 44, 59]
 */

function lowerToUpper(a, b) {
  /* **** for lower to upper ****
   * if result > 0 -> a comes first
   * if result = 0 -> nothing will change
   * if result < 0 -> b comes first
   */
  return a - b;
}

function upperToLower(a, b) {
  /* **** for upper to lower ****
   * if result > 0 -> a comes first
   * if result = 0 -> nothing will change
   * if result < 0 -> b comes first
   */
  return b - a;
}

// upper to lower

console.log(ageArray.sort(upperToLower));

console.log(
  products.sort((a, b) => {
    return a.quantity * a.price - b.quantity * b.price;
  })
);

// lower to upper

console.log(ageArray.sort(lowerToUpper));

/* ********** valueOf() ********** */

/*
 * valueOf() method is the defualt method of an array
 * it return the original array
 * it return same as array
 * this method will not change the original array
 */

console.log(bsArray.valueOf()); // return the original array
