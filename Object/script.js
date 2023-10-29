/*
 * define a new property in an object
 */

const person = {
    fname: "John",
    lname: "Doe",
};
person.age = 30;

/*
 * delete a property
 * object er kono property ke er value shoho remove korte delete keyword use kora hoy. It was designed to remove property from an object
 */

delete person.age;

/*
 * object methods
 */

const saminData = {
    firstName: "Samin",
    lastName: "Yasar",
    fulllName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(saminData.fulllName());

saminData.currentTime = function () {
    return new Date().toLocaleTimeString();
};

console.log(saminData.currentTime());

/*
 * object is a primitive value
 */

const myObj = {
    firstName: "Harry",
    lastName: "Bite",
};
let x = myObj;
delete x.lastName;
console.log(myObj.lastName); // undefined

/*
 * Object.values(obj) - method return all the values of given object property as an array
 */

console.log(Object.values(person));

/* ***** Object Accessories (Getters and Setters) ***** */

// getters

/* defference between Object function and getter
 * using get instead of function is little bit better syntax
 * if I use get then I can ommit the parenthesis() in the end of the function where I will call it. (if function)
 * by using getter i can acces a object method as a property
 * It gives simpler syntax
 * It allows equal syntax for properties and methods
 * It can secure better data quality
 * It is useful for doing things behind-the-scenes

 */

const player = {
    firstName: "Sakib",
    lastName: "Al Hasan",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    language: "Bengali",
    get lang() {
        return this.language;
    },
};
console.log(player.fullName());
console.log(player.lang); // I have not use parenthesis at the end of lang. I can use player.lang instead of player.lang()

// setters

const programmer = {
    firstName: "Ryan",
    lastName: "Dahl",
    get fullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    },
    language: "",
    set lang(lang) {
        this.language = lang.toUpperCase();
    },
};

programmer.lang = "English"; // stores an uppercase value in programmer.language property

console.log(programmer.language);

/* Object.definePropery() - method can defined property in an object */

const Values = {
    count: 0,
};

Object.defineProperty(Values, "reset", {
    get: function () {
        this.count = 0;
    },
});

Object.defineProperty(Values, "increement", {
    get: function () {
        this.count++;
    },
});

Object.defineProperty(Values, "decreement", {
    set: function () {
        this.count--;
    },
});

Object.defineProperty(Values, "add", {
    set: function (addTo) {
        this.count += addTo;
    },
});

Object.defineProperty(Values, "substract", {
    set: function (subsTo) {
        this.count -= subsTo;
    },
});

Values.reset;
Values.add = 5;
Values.substract = 2;
Values.increement;
Values.decreemnt;

console.log(Values);

/* ****** Object Constructor ****** */

/*
 * it helps us to create multiple objects with same type, same properties, values
 * the good practice is to name the Object constructor function with first letter uppercase
 * In the Object constructor we cannot add property, method as like as normal object
 * we can add new property and method in an Object constuctor in 2 ways
 *  --> 1. first define a default value of that property or method which we wanna add in the object constructor
 *  --> 2. define this property or method by using prototype
 */

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.language = "";
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    };
    this.changeFirstName = function (name) {
        this.firstName = name;
    };
}

Person.prototype.getBirthYear = function () {
    let curretnYear = new Date().getFullYear();
    let birthYear = curretnYear - this.age;
    return birthYear;
};
const saminPerson = new Person("Samin", "Yasar", 17);
saminPerson.language = "Bengali";
saminPerson.changeFirstName("Nabil");
console.log(saminPerson.fullName());
console.log(saminPerson.language);
console.log(saminPerson.getBirthYear());

/* ***** Object Prototype ***** */

/*
 * All javascript object inherits properties and methods from prototype
 *  --> Date objects inherit from Date.prototype
 *  --> Array objects inherit from Array.prototype
 *  --> Person objects inherit from Person.prototype
 * Object.prototype is on the top of the prototype chain
 */

function Student(firstName, lastName, className, rollNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.className = className;
    this.rollNumber = rollNumber;
}
Student.prototype.schoolName = "Shamsul Haque Khan School";
Student.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
const student1 = new Student("Samin", "Yasar", 11, 22124);
student1.schoolName = "Khilgaon Government College";
console.log(student1.fullName());
console.log(student1.schoolName);

/* ****** Object Methods ******
 * Object.create(objectName) - er maddhome amra parents er property, methods ke child er moddhe access korte pari
 * Object.assign({}, objectName) - used to create a new object from an existing object
 * Object.defineProperty(objectName, "propertyName", {descriptor}) - to add new property, methods in an Object constructor
 * Object.defineProperties(objectName, {descriptors}) - to change existing property, method in an Object constructor
 * Object.getOwnPropertyDescriptor(object, "property") - to access property
 * Object.getOwnPropertyDescriptors(object) - to access properties
 * Object.getOwnPropertyNames(objectName) - return all existing property name as an array
 * Object.keys(objectName) - return enumerable properties as an array
 * Object.getPrototypeOf(objectName) - accessing the prototype
 * Object.preventExtensions(objectName) - prevents to adding new properties in object
 * Object.isExtensible(objectName) - returns true if new property can add in this object
 * Object.seal(objectName) - prevents changes of object properties (not values)
 * Object.isSealed(objectName) - returns true if object is sealed
 * Object.freeze(objectName) - prevents any changes to an object
 * Object.isFrozen(objectName) - returns true if object is frozen
 */

/* Object.assign({}, objectName) */

const obj1 = {
    x: 10,
    y: 4,
};

const obj2 = Object.assign({}, obj1);
obj2.x = 20;
console.log(obj1);
console.log(obj2);

/* defineProperty(obj, "property", {value: addtoValue})
 * parameter --> (objectName, "propertyName", {
   value: addtoValue,
   writable: true/false,
   enumerable: true/false,
   configurable: true/false
 })
 */

const programmingLanguage = {
    name: "JavaScript",
    creator: "Brendan Eich",
    year: 1995,
};

Object.defineProperty(programmingLanguage, "age", {
    value: new Date().getFullYear() - programmingLanguage.year,
    writable: false,
    enumerable: false,
});

programmingLanguage.age = 34; // value will not change for writable: false

console.log(programmingLanguage.age);

/* defineProperties()
 * parameter --> (objectName, {
   propertyName: {
     value: addtoValue,
     enumerable
   }
  });
  * Here I can add multiple properties
 */

Object.defineProperties(programmingLanguage, {
    rank: {
        value: 5,
        enumerable: true,
    },
    type: {
        value: "Scripting",
        enumerable: true,
        writable: true,
    },
});

console.log(programmingLanguage.rank);
console.log(programmingLanguage.type);

/* getOwnPropertyDescriptor() */

console.log(Object.getOwnPropertyDescriptor(programmingLanguage, "age"));
console.log(Object.getOwnPropertyDescriptor(programmingLanguage, "type"));

/* getOwnPropertyDescriptor() */

// takes only one parameter

console.log(Object.getOwnPropertyDescriptors(programmingLanguage));

/* getOwnPropertyNames() */

console.log(Object.getOwnPropertyNames(programmingLanguage)); // returns all the property as an array

/* Object.keys() */

console.log(Object.keys(programmingLanguage)); // returns all property names of programmingLanguage object except "age" because of enumerable: false

/* prototypeOf(obj) */

console.log(Object.getPrototypeOf(programmingLanguage));

/* preventExtensions(obj)
 * it takes only one parameter
 * it returns the original object
 */

Object.preventExtensions(programmingLanguage);

try {
    Object.defineProperty(programmingLanguage, "crossPlatform", {
        value: true,
        enumerable: true,
    });
} catch (err) {
    console.log(err.message);
}

programmingLanguage.type = "Programming";
console.log(programmingLanguage.type);

/* isExtensible(obj)
 * return true if object is extensible otherwise return false
 */

console.log(Object.isExtensible(programmingLanguage));
console.log(Object.isExtensible(programmer));

/* seal(objectName)
 * cannot add any property to an object
 * but can change existing property value
 */

console.log(Object.seal(programmingLanguage));

try {
    console.log(
        Object.defineProperty(programmingLanguage, "custom", {
            value: "Oops...!",
        })
    );
} catch (err) {
    console.log(err.message);
}

const bangladesh = {
    name: "Bangladesh",
    language: "Bengali",
    area: `${(147570).toLocaleString()} Square K.M`,
    population: `${1.8}B`,
};

console.log(Object.seal(bangladesh));
bangladesh.age = 50;
console.log(bangladesh.age); // undefined
bangladesh.language = "English";
console.log(bangladesh.language); // English

/* isSealed(objectName) */

console.log(Object.isSealed(programmingLanguage));
console.log(Object.isSealed(programmer));

/* freeze(objectName) */

const Samin = {
    firstName: "Samin",
    lastName: "Yasar",
    age: 17,
    language: "Bengali",
};

console.log(Object.freeze(Samin));

/*
 * TODO: learn details from ALl you need to know javascript's Object Oriented Chapter
 * STATUS: Learing
 */
