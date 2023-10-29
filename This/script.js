/*
 * in JavaScript this keyword is refers to the object it belongs to
 * In a method, this refers to the owner object.
 * Alone, this refers to the global object.
 * In a function, this refers to the global object.
 * In a function, in strict mode, this is undefined.
 * In an event, this refers to the element that received the event.
 * Methods like call(), and apply() can refer this to any object.
 */

/* Explicit Function bindings */

const person1 = {
  fullName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

const person2 = {
  fname: "samin",
  lname: "yasar",
};

console.log(person1.fullName.call(person2));

/* Learn with sumit */

/* ****** this ****** */

/*
 * implicit binding --> at first function jekhane call hobe shekhane dekhbe je (.) notation er immedieat left e je ase this keyword takei represents korbe
 * explicit binding
 * new binding
 * window binding
 */

// implicit binding
/* const printPlayerNameFunc = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
};

const sakib = {
  name: "Sakib",
  age: 35,
};

printPlayerNameFunc(sakib);
sakib.printPlayerName();
 */

// explicit binding
/* const printName = function (age, country) {
  console.log(`${this.name} ${age} ${country}`);
};

const sakib = {
  name: "Sakib",
  age: 17,
};

printName.call(sakib, 35, "Bangladesh"); // same
printName.apply(sakib, [35, "Bangladesh"]); // same
// .bind() --> er khetre eta direct call hoyna etar defination ta return kore tai etake amader manually call kore dite hoy or ekta variable er moddhe store kore then call korte hoy
printName.bind(sakib, 35, "Bangladesh")();
 */

// new binding
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(`${this.name} is ${age} years old`);
// }

// const sakib = new Person("Sakib", 35);

// window binding --> by default this keyword window object or global object ke point kore. Arrow function e by default window object ke this hishebe point kore.

/* ("use strict");
function printName() {
  console.log(this.name);
}

const sakib = {
  name: "Sakib",
};
printName(); */
