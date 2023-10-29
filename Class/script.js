/*
 * to create a class use class keyword
 * in javascript classes are not an object it is one kind of template for javascript objects
 * class methods are created with the same syntax as object methods
 * class declaration are not hoisted
 */

/* ***** Constructor Method *****
 * The constructor method is a special method:
 * It has to have the exact name "constructor"
 * It is executed automatically when a new object is created
 * It is used to initialize object properties
 * If you do not define a constructor method, JavaScript will add an empty constructor method.
 */

class Person {
    constructor(firstName, lastName, birthYear, birthMonth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.birthMonth = birthMonth;
        this.monthData = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
    }
    age() {
        let ageInYear = new Date().getFullYear() - this.birthYear;
        let ageInMonth;
        try {
            if (this.birthMonth > 0 && this.birthMonth < 12) {
                ageInMonth = new Date().getMonth() - this.birthMonth;
            } else if (this.monthData.includes(this.birthMonth)) {
                ageInMonth =
                    new Date().getMonth() -
                    (this.monthData.indexOf(this.birthMonth) + 1);
            } else {
                throw "invalid birth month";
            }
            return `${ageInYear} years ${ageInMonth} months`;
        } catch (err) {
            return err;
        }
    }
}
Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
const saminyasar = new Person("Samin", "Yasar", 2004, "samin");
console.log(saminyasar.fullName());
console.log(saminyasar.age());

/* ****** class inheritance ******
 * to create class inheritance use extend keyword
 * a class created with a class inheritance inherits all the methods from another class
 * super() - method refers to the parent class
 * by calling super() method in the constructor we call the parent's constructor methods and get access to the parents properties and methods
 */

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName.toLowerCase();
        this.lastName = lastName.toLowerCase();
    }
    fullName() {
        this.fullName = `${this.firstName
            .charAt(0)
            .toUpperCase()}${this.firstName.slice(1)} ${this.lastName
            .charAt(0)
            .toUpperCase()}${this.lastName.slice(1)}`;
        return this.fullName;
    }
}

class StudentDetails extends Student {
    constructor(firstName, lastName, className, rollNum) {
        super(firstName, lastName);
        this.className = className;
        this.rollNum = rollNum;
    }
    getDetails() {
        return `Student name: ${this.fullName()}\nClass: ${
            this.className
        }\nRoll: ${this.rollNum}`;
    }
}

const saminYasar = new StudentDetails("samin", "yasar", 11, 22124);
console.log(saminYasar.getDetails());

/* ***** getters and setters *****
 * even getter is a method I can't use parenthesis to get property value
 */

class People {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this._country = country;
    }
    get language() {
        return this._country;
    }
    set language(lang) {
        this._country = lang;
    }
}

const johnDoe = new People("John Doe", 35, "England");
johnDoe.language = "Bangladesh";
console.log(johnDoe.language);

/* ***** class static *****
 * static class methods are defined on the class itself
 * I can't call a static method on an object only on an object class
 *
 */

class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    static greetings() {
        return `Hello...`;
    }
    static carAge(carClass) {
        return Math.abs(carClass.year - new Date().getFullYear());
    }
}

const BMW_1 = new Car("BMW", 2014);

console.log(Car.greetings());
console.log(Car.carAge(BMW_1));
// console.log(BMW_1.carAge()) // ERROR
