/*
 * Title: Prototype Inheritance
 * Description: Learn with sumit
 * Author: Samin Yasar
 * Date: 30/June/2021
 */

/*
 * inheritance mane holo kono ekta child tar parent er kono properies, method bohon kore niye ashe
 * kono child ke tar parent er kono kisu inherit korte hole 3 ta kaj korte hoy
 *  --> 1. child ke parent er arguments explicitly call() kore dite hobe
 *  --> 2. parent er prototype & child er prototype link korte hoy
 *  --> 3. child er constructor function e override korte hoy
 */

/* *********** do same thing use prototype *********** */

/* function Person(firstName, lastName, age) {
    // parent object
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
Person.prototype = {
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};
function Cricketer(firstName, lastName, age, type, jerseyNum, country) {
    // child object
    Person.call(this, firstName, lastName, age); // step 1 done.
    this.type = type;
    this.jerseyNum = jerseyNum;
    this.country = country;
}
Cricketer.prototype = Object.create(Person.prototype); // step 2 done.
Cricketer.prototype.constructor = Cricketer; // step 3 done.
Cricketer.prototype.introducePlayer = function () {
    return `${this.getFullName()}'s jersey number is ${this.jerseyNum}`;
};
const taskin = new Cricketer("Taskin", "Ahmed", 29, "Bowler", 4, "Bangladesh");
console.log(taskin.getFullName());
console.log(taskin.introducePlayer()); */

/* *********** do same thing use class *********** */

/* class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Cricketer extends Person {
  constructor(firstName, lastName, age, type, jerseyNum, country) {
    super(firstName, lastName, age);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.type = type;
    this.jerseyNum = jerseyNum;
    this.country = country;
  }
  introducePlayer() {
    return `${this.getFullName()}'s jersey number is ${this.jerseyNum}`;
  }
}

const mashrafee = new Cricketer(
  "Mashrafee",
  "Mortaza",
  50,
  "Bowler",
  3,
  "Bangladesh"
);

console.log(mashrafee.getFullName());
console.log(mashrafee.introducePlayer()); */

/* ******** Polymarphism  ********
 * polymarphism holo parent kono property or method ke jodi child override kore sheta
 */

/* class Person {
  constructor({ firstName, lastName, age }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  play() {
    console.log(`${this.getFullName()} is playing`);
  }
}

class Cricketer extends Person {
  constructor({ firstName, lastName, age, type, jerseyNum, country }) {
    super(firstName, lastName, age);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.type = type;
    this.jerseyNum = jerseyNum;
    this.country = country;
  }
  introducePlayer() {
    return `${this.getFullName()}'s jersey number is ${this.jerseyNum}`;
  }
  play() {
    super.play();
    return `${this.getFullName()} is playing Cricket`;
  }
}

const tamimData = {
  firstName: "Tamim",
  lastName: "Iqbal",
  age: 30,
  type: "Batsman",
  jerseyNum: 45,
  country: "Bangladesh",
};

const tamim = new Cricketer(tamimData);
console.log(tamim.play()); */
