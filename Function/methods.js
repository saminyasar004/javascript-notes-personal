/*
 * call() - it can be used to invoke(call) with an owner object as an arguments(parametr). an object can use a method belonging another object
 * apply() - this method used to write a method that can be used on different object
 * bind() - as like as call() but eta directly call hoye jay na shudu function er defination ta nijer moddhe store kore rakhe eta ke amra manually call kore dite hoy.
 */

/* call()
 * first parameter --> objectToApply
 * second to rest parameter --> arg...
 * it takes arguments as list (objectToCall, arg, arg, arg...)
 */

const Person = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  address: function (city, country) {
    return `${city}, ${country}`;
  },
};

const saminData = {
  firstName: "Samin",
  lastName: "Yasar",
};

const nabilData = {
  firstName: "Nabil",
  lastName: "Mahmud",
};

console.log(Person.fullName.call(nabilData));
console.log(Person.address.call(nabilData, "Dhaka", "Bangladesh"));

/* apply()
 * first parameter --> objectToApply
 * second to rest parameter --> [arg, arg, arg...]
 * this method takes arguments as an array
 * apply(objectToApply, [arg, arg,arg])
 */

console.log(Person.address.apply(saminData, ["New York", "USA"]));

const nums = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, nums));
console.log(Math.max.apply("", nums));
console.log(Math.max.apply(0, nums));

/* bind() */

function printFullName() {
  console.log(`${this.firstName} ${this.lastName}`);
}

function Student(firstName, lastName, className, roll) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.className = className;
  this.roll = roll;
}

const sakib = new Student("Sakib", "Hasan", 11, 22124);

printFullName.bind(sakib)(); // as like as call();
