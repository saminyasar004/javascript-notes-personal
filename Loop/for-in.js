/**
 * * The JavaScript for/in statement loops through the properties of an Object
 * * The JavaScript for/in statement can also loop over the properties of an Array
 * * It's return the index of the iterator
 */

const userData = {
    fname: "Samin",
    lname: "Yasar",
    username: "saminyasar004",
    age: 17,
};

const persons = [
    "Ben Awad",
    "William Lin",
    "Erichto",
    "Wes Bos",
    "Florin Pop",
    "Brad Travarse",
];

for (key in userData) {
    console.log(key); // fname, lname, username, age
    console.log(userData[key]); // Samin, Yasar, saminyasar004, 17
}

for (person in persons) {
    console.log(person); // 0, 1, 2, 3, 4, 5, 6
    console.log(persons[person]); // Ben Awad William Lin Erichto Wes Bos Florin Pop Brad Travarse
}
