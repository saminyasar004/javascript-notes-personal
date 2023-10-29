/*
 * JSON --> JavaScript Object Notation
 * parse() - used to converts a JSON data to javascript object
 * stringify() - used to converts a javascript object to JSON (not stringify a function)
 */

const userData = {
  firstName: "Samin",
  lastName: "Yasar",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  age: 17,
};

const JSONData = `{
  "username": "saminyasar",
  "firstName": "Samin",
  "lastName": "Yasar",
  "age": 17
}`;

const friendsName = '["Rahim", "Karim", "Noman"]';

console.log(JSON.parse(friendsName));
console.log(JSON.parse(JSONData));
console.log(JSON.stringify(userData));

console.log(
  JSON.parse(JSONData, (key, value) => {
    console.log(key + " : " + value);
  })
);

const obj = {
  name: "John",
  age: function () {
    return 30;
  },
  city: "New York",
};
obj.age = obj.age.toString();
const myJSON = JSON.stringify(obj);
console.log(myJSON);

userData.fullName = userData.fullName.toString();
const userDataJSON = JSON.stringify(userData);

const td = JSON.parse(userDataJSON);
td.fullName = eval(`(${td.fullName})`);
console.log(td.fullName());
