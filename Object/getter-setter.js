/*
 * Title: Object Getter & Setter
 * Description: Learn with sumit
 * Author: Samin Yasar
 * Date: 30/June/2021
 */

/* ********* Getter *********
 * getter ke object method er moto kore define kora hoy but eta use orthat invoke korar shomoy property er moto kore likhlei hoy
 */

/* class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const samin = new Person("Samin", "Yasar", 17);

console.log(samin.getFullName); // return Samin Yasar
 */

/* ********* Setter *********
 * setter holo kono kisu ke amra manually set korte pari
 * eta only one parameter accept kore
 */

/* class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set setFullName({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const samin = new Person("Samin", "Yasar", 17);

console.log(samin.firstName);
console.log(samin.lastName);

samin.setFullName = { firstName: "Tamim", lastName: "Iqbal" };

console.log(samin.firstName);
console.log(samin.lastName); */
