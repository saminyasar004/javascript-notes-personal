/*
 * Prototype Chain holo child er kono property access korar shomoy jodi oi property or method tar moddhe na thake tahole javascript tar immediet parent er moddhe dekhe evabe aste aste uporer dike jay eke prototype chain bola hoy
 */

/* *************** */

/* function Person(name, age) {
  let person = {};
  person.name = name;
  person.age = age;
  person.eat = function () {
    console.log(`${this.name} is eating.`);
  };
  return person;
}

const samin = Person("Samin", 17);
const nabil = Person("Nabil", 17);

samin.eat();
nabil.eat(); */

/* const PersonMethods = {
  eat() {
    console.log(`${this.name} Person is eating`);
  },
};

function Person(name, age) {
  let person = {};
  person.name = name;
  person.age = age;
  person.eat = PersonMethods.eat;
  return person;
}

const samin = Person("Samin", 17);
samin.eat(); */

/* Person.prototype = {
  eat() {
    console.log(`${this.name} is eating`);
  },
  play() {
    console.log(`${this.name} is playing`);
  },
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const samin = new Person("Samin", 17);
const nabil = new Person("Nabil", 11);
samin.eat();
nabil.play(); */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  play() {
    console.log(`${this.name} is playing`);
  }
}

const samin = new Person("Samin", 17);
const nabil = new Person("Nabil", 11);
samin.eat();
nabil.play();

/* **** Prototype Inheritance **** */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cricketer extends Person {
  constructor(type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
  }
}

const sakib = new Cricketer("Allrounder", "Bangladesh");
