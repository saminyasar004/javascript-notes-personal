/**
 * The JavaScript for/of statement loops through the values of an iterable object.
 * it's return the current element of the iterator
 * * It not works for object
 */

const userData = {
    fname: "Samin",
    lname: "Yasar",
    username: "saminyasar004",
    age: 17,
};
const cars = ["BMW", "Ferrai", "Lamborghini", "Roles Royce"];
const full_name = "Samin Yasar";

for (let car of cars) {
    // console.log(car); // BMW Ferrai Lamborghini Roles Royce
    // console.log(cars); // entire array
}

for (let word of full_name) {
    // console.log(word);
}

for (let data of userData) {
    console.log(data); // Error --> userdata is not iterable
}
