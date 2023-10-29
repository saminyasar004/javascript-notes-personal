/*
 * Title: Class static method
 * Description: learn with sumit
 * Author: Samin Yasar
 * Date: 30/June/2021
 */

/* ******** Static ********
 * normal object constructor function er method ke call korar jonno oi constructor function diye ekta object first e initiate korte hoy then oi created object dieye dot notation er maddhome oi method ke call korte pari.
 * kintu static method ke amra class er private property hishebe access korte pari.
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
  static greetings(userObj) {
    console.log(`Hello ${userObj.name} ${userObj.age}`);
  }
}

const samin = new Person("Samin", 17);

Person.greetings(samin); // Hello Person undefined
// Person.eat(); // throw error
